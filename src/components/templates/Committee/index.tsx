import React, { useState } from 'react';
import styled from 'styled-components';
import MinimumLayout from '@components/templates/layouts/Minimum';
import type { Action } from '@type/hasura';
import Seo from '@components/App/Seo';
import OptionDetails, {
  OptionDetailsProps,
} from '@components/molecules/OptionDetails';
import CountBox from '@components/atoms/CountBox';

export type ElectedOfficialTemplateProps = {
  pageContext: {
    slug: string;
    committee: {
      id: string;
      name: string;
      type: string;
      jurisdiction: string;
      url: string;
      created_at: string;
      updated_at: string;
      description: string;
      billsCount: number;
      bills: any[];
      membersCount: number;
      members: any[];
      subCommitteesCount: number;
      subCommittees: any[];
      actionsCount: number;
      actions: any[];
    };
  };
};

const CommitteeTemplate = ({
  pageContext: {
    slug,
    committee: {
      id,
      name,
      type,
      jurisdiction,
      url,
      created_at,
      updated_at,
      description,
      billsCount,
      bills,
      membersCount,
      members,
      subCommitteesCount,
      subCommittees,
      actionsCount,
      actions,
    },
  },
}: ElectedOfficialTemplateProps) => {
  const [clickedOption, setClickedOption] = useState<string | null>('Bills');
  const [hoveredOption, setHoveredOption] = useState<string | null>(null);

  const activeOption = clickedOption ? clickedOption : hoveredOption;

  const options: OptionDetailsProps[] = [
    {
      title: 'Bills',
      count: billsCount,
      type: 'bills',
      details: bills.map(({ activity, bill }) => ({
        text: `${activity}`,
        subtext: `${bill.type.toUpperCase()} ${bill.number} - ${
          bill.short_title || bill.title
        }`,
        slug: `/${bill.congress}/${bill.type}${bill.number}`,
      })),
    },
    // {
    //   title: 'Bill Actions',
    //   count: billActionsAggregate.aggregate.count,
    //   type: 'billActions',
    //   details: billActionsAggregate.nodes.map(({ id, type, text, status }) => ({
    //     text: type,
    //     subtext: text,
    //     slug: '',
    //   })),
    // },
    {
      title: 'Members',
      count: membersCount,
      type: 'members',
      details: members.map(
        ({ id, name, title, rank, elected_official_id }) => ({
          text: name,
          subtext: title,
          slug: `/officials/${elected_official_id}`,
        })
      ),
    },
    {
      title: 'Subcommittees',
      count: subCommitteesCount,
      type: 'rollCalls',
      details: subCommittees.map(({ id, name }) => ({
        text: name,
        subtext: '',
        slug: `/subcommittees/${id}`,
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
        title={name}
        description={description}
        keywords={[name]}
      />
      <ContentLayout>
        <Header>
          <Title>
            <Position>{type}</Position>
            <Name length={name.length}>{name}</Name>
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

export default CommitteeTemplate;

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
