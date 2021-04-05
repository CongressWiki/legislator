import React, { useState } from 'react';
import styled from 'styled-components';
import MinimumLayout from '@components/Layouts/Minimum';
import type { OfficialWithImage } from '@type/hasura';
import SEO from '@components/Seo';
import CircleAvatar from '@components/CircleAvatar';
import CountBox from '@components/CountBox';
import { graphql } from 'gatsby';

export type PageQueryData = {
  hasura: {
    elected_officials_by_pk: {
      amendments_aggregate: {
        aggregate: {
          count: number;
        };
        nodes: Array<{
          id: string;
          type: string;
          number: number;
          bill_id: string;
          purpose: string;
          introduced_at: string;
        }>;
      };
      bills_aggregate: {
        aggregate: {
          count: number;
        };
        nodes: Array<{
          id: string;
          type: string;
          number: number;
          introduced_at: string;
          short_title: string;
        }>;
      };
      committee_memberships_aggregate: {
        aggregate: {
          count: number;
        };
        nodes: Array<{
          id: string;
          created_at: string;
          rank: string;
          party: string;
          committee: {
            id: string;
            name: string;
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
            short_title: string;
          };
        }>;
      };
      subcommittee_memberships_aggregate: {
        aggregate: {
          count: number;
        };
        nodes: Array<{
          id: string;
          party: string;
          rank: string;
          created_at: string;
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
        amendments_aggregate {
          aggregate {
            count
          }
          nodes {
            id
            type
            number
            bill_id
            purpose
            introduced_at
          }
        }
        bills_aggregate {
          aggregate {
            count
          }
          nodes {
            id
            type
            number
            introduced_at
            short_title
          }
        }
        committee_memberships_aggregate {
          aggregate {
            count
          }
          nodes {
            id
            created_at
            rank
            party
            committee {
              name
              id
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
              short_title
            }
          }
        }
        subcommittee_memberships_aggregate {
          aggregate {
            count
          }
          nodes {
            party
            rank
            id
            created_at
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

export type Option = {
  title: string;
  count: number;
  details: Array<{
    text: string;
    subtext: string;
    slug: string;
  }>;
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
  const [clickedOption, setClickedOption] = useState<Option | null>(null);
  const [hoveredOption, setHoveredOption] = useState<Option | null>(null);

  const activeOption = clickedOption ? clickedOption : hoveredOption;

  const options: Option[] = [
    {
      title: 'Bills Introduced',
      count: bills_aggregate.aggregate.count,
      details: bills_aggregate.nodes.map((bill) => ({
        text: `${bill.type}-${bill.number}`,
        subtext: bill.short_title,
        slug: `bills/${bill.type}-${bill.number}`,
      })),
    },
    {
      title: 'Bills Cosponsored',
      count: cosponsorships_aggregate.aggregate.count,
      details: cosponsorships_aggregate.nodes.map(({ bill }) => ({
        text: `${bill.type}-${bill.number}`,
        subtext: bill.short_title,
        slug: `bills/${bill.type}-${bill.number}`,
      })),
    },
    {
      title: 'Amendments Introduced',
      count: amendments_aggregate.aggregate.count,
      details: amendments_aggregate.nodes.map((amendment) => ({
        text: `${amendment.type}-${amendment.number}`,
        subtext: amendment.purpose,
        slug: `bills/${amendment.type}-${amendment.number}`,
      })),
    },
    {
      title: 'Roll Call Votes',
      count: votes_aggregate.aggregate.count,
      details: votes_aggregate.nodes.map((vote) => ({
        text: vote.roll_call.question,
        subtext: vote.decision,
        slug: `rollcalls/${vote.id}`,
      })),
    },
    {
      title: 'Committees',
      count: committee_memberships_aggregate.aggregate.count,
      details: committee_memberships_aggregate.nodes.map((committee) => ({
        text: committee.committee.name,
        subtext: committee.created_at,
        slug: `committees/${committee.id}`,
      })),
    },
    {
      title: 'Subcommittees',
      count: subcommittee_memberships_aggregate.aggregate.count,
      details: subcommittee_memberships_aggregate.nodes.map((subcommittee) => ({
        text: subcommittee.subcommittee.name,
        subtext: subcommittee.created_at,
        slug: `subcommittees/${subcommittee.id}`,
      })),
    },
  ];

  return (
    <MinimumLayout>
      <SEO
        pathname={slug}
        title={electedOfficial.preferred_name}
        description={electedOfficial.preferred_name}
      />
      <ContentLayout>
        <div className="title">
          <Name>{electedOfficial.preferred_name}</Name>
          <p>{electedOfficial.state}</p>
        </div>
        <OptionsContainer className="options">
          {options.map((option, index) => {
            const char = String.fromCharCode(97 + index);
            return (
              <CountBox
                className={char}
                title={option.title}
                count={option.count}
                isActive={option.title === activeOption?.title}
                onMouseOver={() => setHoveredOption(option)}
                onMouseOut={() => setHoveredOption(null)}
                onClick={() =>
                  clickedOption?.title === option.title
                    ? setClickedOption(null)
                    : setClickedOption(option)
                }
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
        <OptionDetailsContainer className="details">
          {activeOption ? (
            <ul>
              {activeOption.details.map(({ text, subtext, slug }) => (
                <li>{text}</li>
              ))}
            </ul>
          ) : null}
        </OptionDetailsContainer>
      </ContentLayout>
    </MinimumLayout>
  );
};

export default ElectedOfficialTemplate;

const Name = styled.h2`
  width: fit-content;
  margin-bottom: 0;
`;

const ContentLayout = styled.div`
  width: 100%;

  display: grid;
  grid-template-columns: 1fr auto 1fr;
  grid-template-rows: 125px min(32vw, 300px) 125px;
  grid-template-areas:
    '....... title .......'
    'options img   details'
    'foot    foot  foot';

  .title {
    grid-area: title;
    justify-self: center;
    text-align: center;
  }

  .img {
    grid-area: img;
    align-self: center;
    justify-self: center;
  }

  .options {
    grid-area: options;
  }

  .details {
    grid-area: details;
  }
`;

const OptionsContainer = styled.div`
  width: 100%;
  height: 100%;

  display: grid;
  grid-template-columns: repeat(10, 1fr);
  grid-template-areas:
    'a a a a a a a a a a'
    'b b b b b b b b b .'
    'c c c c c c c c c .'
    'd d d d d d d d d .'
    'e e e e e e e e e .'
    'f f f f f f f f f f';
  align-items: center;
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

const OptionDetailsContainer = styled.div`
  width: 100%;
  height: 100%;

  display: grid;
  grid-template-rows: auto 1fr;
  grid-template-areas: 'details';
  align-items: center;
  text-align: left;
  justify-content: start;

  transition: all 0.3s;

  .details {
    grid-area: details;
  }
`;
