import React, { useState } from 'react';
import styled from 'styled-components';
import MinimumLayout from '@components/Layouts/Minimum';
import type { OfficialWithImage } from '@type/hasura';
import SEO from '@components/Seo';
import CircleAvatar from '@components/CircleAvatar';
import CountBox from '@components/CountBox';
import { graphql } from 'gatsby';
import StateIcon from '@components/StateIcon';
import OptionDetails, { OptionDetailsProps } from '@components/OptionDetails';
import _ from 'lodash';

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
  query elected_officials_aggregate_counts($id: String!) {
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
  const [clickedOption, setClickedOption] = useState<OptionDetailsProps | null>(
    null
  );
  const [hoveredOption, setHoveredOption] = useState<OptionDetailsProps | null>(
    null
  );

  const activeOption = clickedOption ? clickedOption : hoveredOption;

  const options: OptionDetailsProps[] = [
    {
      title: 'Bills Introduced',
      count: bills_aggregate.aggregate.count,
      type: 'bills',
      details: bills_aggregate.nodes.map((bill) => ({
        text: `Introduced ${bill.type.toUpperCase()} ${bill.number}`,
        subtext: bill.short_title || bill.title,
        slug: `/${bill.congress}/${bill.type}${bill.number}`,
      })),
    },
    {
      title: 'Bills Cosponsored',
      count: cosponsorships_aggregate.aggregate.count,
      type: 'cosponsorships',
      details: cosponsorships_aggregate.nodes.map(({ bill }) => ({
        text: `Cosponsor of ${bill.type.toUpperCase()} ${bill.number}`,
        subtext: bill.short_title || bill.title,
        slug: `/${bill.congress}/${bill.type}${bill.number}`,
      })),
    },
    {
      title: 'Amendments Introduced',
      count: amendments_aggregate.aggregate.count,
      type: 'amendments',
      details: amendments_aggregate.nodes.map((amendment) => ({
        text: `Amended ${amendment.bill.type.toUpperCase()} ${
          amendment.bill.number
        } with ${amendment.type.toUpperCase()} ${amendment.number}`,
        subtext:
          amendment.purpose ||
          amendment.description ||
          `Bill: ${amendment.bill.title}`,
        slug: `/${amendment.bill.congress}/${amendment.bill.type}${amendment.bill.number}`,

        // Slug: `/${amendment.congress}/${amendment.type}${amendment.number}`,
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

  return (
    <MinimumLayout>
      <SEO
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
        <div className="title">
          <Name>{electedOfficial.preferred_name}</Name>
          {/* <StateIcon className="state" state={electedOfficial.state} /> */}
          {/* <State>{electedOfficial.state}</State> */}
          <Position>
            {electedOfficial.state}{' '}
            {normalizePosition(electedOfficial.position)}
          </Position>
          <TermDate>
            {new Date(electedOfficial.term_start_at).toLocaleString(
              'en-us',
              localDateStringOptions
            )}
            {' - '}
            {new Date(electedOfficial.term_end_at).toLocaleString(
              'en-us',
              localDateStringOptions
            )}
          </TermDate>
        </div>
        <OptionsContainer className="options">
          {options.map((option, index) => {
            const char = String.fromCharCode(97 + index);
            return (
              <CountBox
                key={option.title}
                className={char}
                title={option.title}
                count={option.count}
                isActive={option.title === activeOption?.title}
                onMouseOver={() => {
                  setHoveredOption(option);
                }}
                onMouseOut={() => {
                  setHoveredOption(null);
                }}
                onClick={() => {
                  clickedOption?.title === option.title
                    ? setClickedOption(null)
                    : setClickedOption(option);
                }}
              />
            );
          })}
        </OptionsContainer>
        <CircleAvatar
          className="img"
          preferred_name={electedOfficial.preferred_name}
          political_party={electedOfficial.political_party}
          image={electedOfficial.image}
          loading="eager"
          size="min(32vw, 300px)"
        />
        {activeOption ? (
          <OptionDetails className="details" {...activeOption} />
        ) : null}
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

const Name = styled.h2`
  font-weight: 600;
`;

const State = styled.p`
  font-weight: bold;
`;

const Position = styled.p`
  margin-bottom: 0;
  font-family: century_supra_c3;
  padding-bottom: 1rem;
  border-bottom: solid thin var(--color-gray700);
`;

const TermDate = styled.p`
  font-weight: 400;
  font-family: century_supra_c3;
  color: var(--color-dimText);
`;

const ContentLayout = styled.div`
  min-width: 860px;
  overflow: hidden;

  justify-self: center;

  display: grid;
  height: calc(100vh - 115px);
  grid-template-columns: 1fr auto 1fr;
  grid-template-rows: 50px 150px 1fr;
  grid-template-areas:
    '....... ..... details'
    '....... title details'
    'options img   details';

  .title {
    grid-area: title;
    width: 100%;
    height: 100%;
    justify-self: center;
    text-align: center;
  }

  .img {
    grid-area: img;
    align-self: start;
    justify-self: start;
  }

  .options {
    grid-area: options;
  }

  .details {
    grid-area: details;

    div:first-child {
      margin-top: 170px;
    }
  }

  .state {
    width: 100%;
    height: auto;
    max-width: 100%;
    max-height: 100%;

    justify-self: center;
    align-self: center;

    path {
      fill: transparent;
      stroke: var(--color-gray500);
    }
  }
`;

const OptionsContainer = styled.div`
  width: 100%;
  height: 100%;
  max-height: 300px;
  align-self: start;

  display: grid;
  grid-template-columns: repeat(10, 1fr);
  grid-template-areas:
    'a a a a a a a a a a'
    'b b b b b b b b b .'
    'c c c c c c c c c .'
    'd d d d d d d d d .'
    'e e e e e e e e e .'
    'f f f f f f f f f f';
  align-items: start;
  align-content: space-between;
  text-align: right;

  .a {
    grid-area: a;
  }

  .b {
    grid-area: b;
  }

  .c {
    grid-area: c;
  }

  .d {
    grid-area: d;
  }

  .e {
    grid-area: e;
  }

  .f {
    grid-area: f;
  }
`;
