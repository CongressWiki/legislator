import React, { useState } from 'react';
import styled from 'styled-components';
import MinimumLayout from '@components/templates/layouts/Minimum';
import type { OfficialWithImage } from '@type/hasura';
import Seo from '@components/App/Seo';
import { graphql } from 'gatsby';
import Image from '@components/atoms/Image';
import Avatar from '@components/atoms/Avatar';
import { getPartyColors } from '@constants';
import OptionDetails, {
  OptionDetailsProps,
} from '@components/molecules/OptionDetails';
import CountBox from '@components/atoms/CountBox';

export type PageQueryData = {
  hasura: {
    elected_officials_by_pk: {
      bills_aggregate: {
        aggregate: {
          count: number;
        };
        nodes: Array<{
          id: string;
          type: string;
          number: number;
          congress: number;
          introduced_at: string;
          short_title: string;
          title: string;
        }>;
      };
      amendments_aggregate: {
        aggregate: {
          count: number;
        };
        nodes: Array<{
          id: string;
          type: string;
          number: number;
          congress: number;
          purpose: string;
          description: string;
          introduced_at: string;
          bill: {
            id: string;
            number: number;
            congress: number;
            type: string;
            title: string;
            short_title: string;
          };
        }>;
      };
      cosponsorships_aggregate: {
        aggregate: {
          count: number;
        };
        nodes: Array<{
          original_cosponsor: boolean;
          bill: {
            id: string;
            type: string;
            number: number;
            congress: number;
            short_title: string;
            title: string;
          };
        }>;
      };
      committee_memberships_aggregate: {
        aggregate: {
          count: number;
        };
        nodes: Array<{
          id: string;
          rank: string;
          party: string;
          title: string;
          committee: {
            id: string;
            name: string;
          };
        }>;
      };
      subcommittee_memberships_aggregate: {
        aggregate: {
          count: number;
        };
        nodes: Array<{
          id: string;
          rank: string;
          party: string;
          title: string;
          subcommittee: {
            id: string;
            name: string;
          };
        }>;
      };
      votes_aggregate: {
        aggregate: {
          count: number;
        };
        nodes: Array<{
          id: string;
          decision: string;
          date: string;
          roll_call: {
            id: string;
            question: string;
          };
        }>;
      };
    };
  };
};

export const query = graphql`
  query elected_officials2_aggregate_counts($id: String!) {
    hasura {
      elected_officials_by_pk(id: $id) {
        bills_aggregate {
          aggregate {
            count
          }
          nodes {
            id
            type
            number
            congress
            introduced_at
            short_title
            title
          }
        }
        amendments_aggregate {
          aggregate {
            count
          }
          nodes {
            id
            type
            number
            congress
            purpose
            description
            introduced_at
            bill {
              id
              number
              congress
              type
              title
              short_title
            }
          }
        }
        cosponsorships_aggregate(where: { withdrawn_at: { _is_null: true } }) {
          aggregate {
            count
          }
          nodes {
            original_cosponsor
            bill {
              id
              type
              number
              congress
              short_title
              title
            }
          }
        }
        committee_memberships_aggregate {
          aggregate {
            count
          }
          nodes {
            id
            rank
            party
            title
            committee {
              name
              id
            }
          }
        }
        subcommittee_memberships_aggregate {
          aggregate {
            count
          }
          nodes {
            id
            rank
            party
            title
            subcommittee {
              name
              id
            }
          }
        }
        votes_aggregate {
          aggregate {
            count
          }
          nodes {
            id
            decision
            date
            roll_call {
              id
              question
            }
          }
        }
      }
    }
  }
`;

export type ElectedOfficialTemplateProps = {
  pageContext: {
    slug: string;
    electedOfficial: OfficialWithImage;
  };
  data: PageQueryData;
};

const ElectedOfficialTemplate = ({
  pageContext: { slug, electedOfficial },
  data: {
    hasura: {
      elected_officials_by_pk: {
        amendments_aggregate,
        bills_aggregate,
        committee_memberships_aggregate,
        cosponsorships_aggregate,
        subcommittee_memberships_aggregate,
        votes_aggregate,
      },
    },
  },
}: ElectedOfficialTemplateProps) => {
  const [clickedOption, setClickedOption] = useState<string | null>(
    'Bills Introduced'
  );
  const [hoveredOption, setHoveredOption] = useState<string | null>(null);

  const termStartDate = new Date(electedOfficial.term_start_at).toLocaleString(
    'en-us',
    localDateStringOptions
  );
  const termEndDate = new Date(electedOfficial.term_end_at).toLocaleString(
    'en-us',
    localDateStringOptions
  );
  const termText = `${termStartDate} - ${termEndDate}`;

  const position = normalizePosition(electedOfficial.position);
  const positionText = `${electedOfficial.state}  ${position}`;

  const activeOption = clickedOption ? clickedOption : hoveredOption;

  const options: OptionDetailsProps[] = [
    {
      title: 'Bills Introduced',
      count: bills_aggregate.aggregate.count,
      type: 'bills',
      details: bills_aggregate.nodes.map((bill) => ({
        text: `${bill.type.toUpperCase()} ${bill.number}`,
        subtext: bill.short_title || bill.title,
        slug: `/${bill.congress}/${bill.type}${bill.number}`,
      })),
    },
    {
      title: 'Bills Cosponsored',
      count: cosponsorships_aggregate.aggregate.count,
      type: 'cosponsorships',
      details: cosponsorships_aggregate.nodes.map(({ bill }) => ({
        text: `${bill.type.toUpperCase()} ${bill.number}`,
        subtext: bill.short_title || bill.title,
        slug: `/${bill.congress}/${bill.type}${bill.number}`,
      })),
    },
    {
      title: 'Amendments Introduced',
      count: amendments_aggregate.aggregate.count,
      type: 'amendments',
      details: amendments_aggregate.nodes.map((amendment) => ({
        text: `${amendment.type.toUpperCase()} ${amendment.number}`,
        subtext:
          amendment.purpose ||
          amendment.description ||
          `Amends ${amendment.bill.type.toUpperCase()} ${
            amendment.bill.number
          } - ${amendment.bill.short_title || amendment.bill.title}`,
        slug: `/${amendment.bill.congress}/${amendment.bill.type}${amendment.bill.number}`,
      })),
    },
    {
      title: 'Roll Call Votes',
      count: votes_aggregate.aggregate.count,
      type: 'rollCalls',
      details: votes_aggregate.nodes.map((vote) => ({
        text: vote.roll_call.question,
        subtext: vote.decision,
        slug: `/rollcalls/${vote.id}`,
      })),
    },
    {
      title: 'Committees',
      count: committee_memberships_aggregate.aggregate.count,
      type: 'committees',
      details: committee_memberships_aggregate.nodes.map((committee) => ({
        text: committee.committee.name,
        subtext: committee.title,
        slug: `/committees/${committee.id}`,
      })),
    },
    {
      title: 'Subcommittees',
      count: subcommittee_memberships_aggregate.aggregate.count,
      type: 'subcommittees',
      details: subcommittee_memberships_aggregate.nodes.map((subcommittee) => ({
        text: subcommittee.subcommittee.name,
        subtext: subcommittee.title,
        slug: `/subcommittees/${subcommittee.id}`,
      })),
    },
  ];

  const handleOptionClick = (option: OptionDetailsProps) => {
    const isActiveOption = clickedOption === option.title;

    if (isActiveOption) {
      setClickedOption(null);
    }

    if (!isActiveOption) {
      setClickedOption(option.title);
    }
  };

  return (
    <MinimumLayout>
      <Seo
        pathname={slug}
        title={electedOfficial.preferred_name}
        description={electedOfficial.preferred_name}
        keywords={[
          electedOfficial.preferred_name,
          electedOfficial.position,
          electedOfficial.political_party,
          electedOfficial.state,
          electedOfficial.first_name,
          electedOfficial.last_name,
          electedOfficial.gender,
        ]}
      />
      <ContentLayout>
        <Portrait partyColor={getPartyColors(electedOfficial.political_party)}>
          <Avatar
            className="glow"
            party={electedOfficial.political_party}
            size="375px"
          >
            <Image
              imageData={electedOfficial.image}
              alt={electedOfficial.first_name}
            />
          </Avatar>
        </Portrait>
        <Header>
          <Title>
            <Position>{positionText}</Position>
            <TermDate>{termText}</TermDate>
            <Name length={electedOfficial.preferred_name.length}>
              {electedOfficial.preferred_name}
            </Name>
          </Title>
        </Header>
        <StatsWrapper>
          <StatMenu>
            {options.map((option, index) => {
              // Dynamic classnames a-f to match grid assignments
              const char = String.fromCharCode(97 + index);
              return (
                <CountBox
                  key={option.title}
                  className={char}
                  title={option.title}
                  count={option.count}
                  isActive={option.title === activeOption}
                  onMouseOver={() => {
                    setHoveredOption(option.title);
                  }}
                  onMouseOut={() => {
                    setHoveredOption(null);
                  }}
                  onClick={() => handleOptionClick(option)}
                />
              );
            })}
          </StatMenu>
          <OptionDetails {...options.find((o) => o.title === activeOption)} />
        </StatsWrapper>
      </ContentLayout>
    </MinimumLayout>
  );
};

const localDateStringOptions: Intl.DateTimeFormatOptions = {
  year: 'numeric',
  month: 'short',
  day: 'numeric',
};

const normalizePosition = (position: string) => {
  if (position === 'house_representative') return 'House Representative';
  if (position === 'senator') return 'Senator';
  if (position === 'president') return 'President';
  if (position === 'vice_president') return 'Vice President';
  return position;
};

export default ElectedOfficialTemplate;

const ContentLayout = styled.div`
  position: relative;

  width: 100%;

  margin: 0;

  padding: 0;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Portrait = styled.div<{ partyColor?: string }>`
  z-index: 0;
  position: absolute;

  height: 100%;
  width: 100%;
  min-width: fit-content;

  padding-top: 60px;

  display: flex;
  align-items: flex-start;
  justify-content: center;

  overflow: hidden;

  .glow {
    filter: drop-shadow(0 0 24px ${(properties) => properties.partyColor});
  }
`;

const Header = styled.div`
  position: relative;

  height: 600px;
  width: min(140ch, calc(100% - 64px));

  display: flex;
`;

const Title = styled.div`
  z-index: 1;
  position: relative;

  justify-self: center;
  align-self: flex-end;

  height: 100%;
  min-width: fit-content;

  display: flex;
  flex-direction: column;
  justify-content: flex-end;
`;

const Name = styled.h2<{ length: number }>`
  margin-top: 0;
  margin-bottom: 0;

  padding-top: 0;
  padding-bottom: 0;

  font-size: ${({ length }) => (length < 16 ? '7rem' : '5.5rem')};
  font-weight: 600;

  @media (max-width: 650px) {
    font-size: ${({ length }) => (length < 16 ? '5rem' : '3rem')};
  }
`;

const Position = styled.p`
  margin-bottom: 0;
  margin-left: 10px;

  padding-bottom: 0;

  font-family: century_supra_c3;
`;

const TermDate = styled.p`
  margin-top: 0;
  margin-left: 10px;
  margin-bottom: 0;

  padding-top: 0;
  padding-bottom: 0;

  font-weight: 400;
  font-family: century_supra_c3;
  color: var(--color-dimText);
`;

const StatsWrapper = styled.div`
  position: relative;

  width: min(140ch, calc(100% - 64px));

  margin-left: 10px;

  display: flex;

  @media (max-width: 600px) {
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
`;

const StatMenu = styled.div`
  position: relative;

  display: flex;
  flex-direction: column;
`;
