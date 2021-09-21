import React, { useState } from 'react';
import styled from 'styled-components';
import MinimumLayout from '@components/templates/layouts/Minimum';
import Seo from '@components/App/Seo';
import Image from '@components/atoms/Image';
import Avatar from '@components/atoms/Avatar';
import { getPartyColors } from '@constants';
import OptionDetails, {
  OptionDetailsProps,
} from '@components/molecules/OptionDetails';
import CountBox from '@components/atoms/CountBox';

export type ElectedOfficialTemplateProps = {
  pageContext: {
    slug: string;
    electedOfficial: {
      id: string;
      position: string;
      rank: string;
      state: string;
      political_party: string;
      gender: string;
      district: string;
      first_name: string;
      last_name: string;
      preferred_name: string;
      is_active: string;
      house_terms: string;
      senate_terms: string;
      vice_president_terms: string;
      president_terms: string;
      term_end_at: string;
      term_start_at: string;
      born_at: string;
      image: any;
      billsCount: number;
      bills: any[];
      amendmentsCount: number;
      amendments: any[];
      cosponsorshipsCount: number;
      cosponsorships: Array<{
        id: string;
        bill_id: string;
        bill: any;
        district: string;
        original_cosponsor: string;
        state: string;
        sponsored_at: string;
      }>;
      committeesMembershipsCount: number;
      committeesMemberships: Array<{
        id: string;
        title: string;
        rank: string;
        party: string;
        committee: any;
      }>;
      subCommitteesMembershipsCount: number;
      subCommitteesMemberships: Array<{
        id: string;
        title: string;
        rank: string;
        party: string;
        subcommittee: any;
      }>;
      votesCount: number;
      votes: Array<{
        id: string;
        roll_call_id: string;
        state: string;
        date: string;
        decision: string;
        rollCall: any;
      }>;
    };
  };
};

const ElectedOfficialTemplate = ({
  pageContext: { slug, electedOfficial },
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
      count: electedOfficial.billsCount,
      type: 'bills',
      details: electedOfficial.bills.map(
        ({ type, number, short_title, title, congress }) => ({
          text: `${type.toUpperCase()} ${number}`,
          subtext: short_title || title,
          slug: `/${congress}/${type}${number}`,
        })
      ),
    },
    {
      title: 'Bills Cosponsored',
      count: electedOfficial.cosponsorshipsCount,
      type: 'cosponsorships',
      details: electedOfficial.cosponsorships.map(({ bill }) => ({
        text: `${bill.type.toUpperCase()} ${bill.number}`,
        subtext: bill.short_title || bill.title,
        slug: `/${bill.congress}/${bill.type}${bill.number}`,
      })),
    },
    {
      title: 'Amendments Introduced',
      count: electedOfficial.amendmentsCount,
      type: 'amendments',
      details: electedOfficial.amendments.map(
        ({ type, number, purpose, description, bill }) => ({
          text: `${type.toUpperCase()} ${number}`,
          subtext:
            purpose ||
            description ||
            `Amends ${bill.type.toUpperCase()} ${bill.number} - ${
              bill.short_title || bill.title
            }`,
          slug: `/${bill.congress}/${bill.type}${bill.number}`,
        })
      ),
    },
    {
      title: 'Roll Call Votes',
      count: electedOfficial.votesCount,
      type: 'rollCalls',
      details: electedOfficial.votes.map(({ id, decision, rollCall }) => ({
        text: rollCall.question,
        subtext: decision,
        slug: `/rollcalls/${id}`,
      })),
    },
    {
      title: 'Committees',
      count: electedOfficial.committeesMembershipsCount,
      type: 'committees',
      details: electedOfficial.committeesMemberships.map(
        ({ title, committee }) => ({
          text: committee.name,
          subtext: title,
          slug: `/committees/${committee.id}`,
        })
      ),
    },
    {
      title: 'Subcommittees',
      count: electedOfficial.subCommitteesMembershipsCount,
      type: 'subcommittees',
      details: electedOfficial.subCommitteesMemberships.map(
        ({ id, title, subcommittee }) => ({
          text: subcommittee.name,
          subtext: title,
          slug: `/subcommittees/${id}`,
        })
      ),
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
    font-size: ${({ length }) => (length < 16 ? '4rem' : '3rem')};
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
