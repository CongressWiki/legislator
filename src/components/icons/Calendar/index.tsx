import CalendarSvg from '@icons/misc/Calendar';
import styled from 'styled-components';

const Calendar = styled(CalendarSvg)`
  margin: auto;
  height: 50%;
  width: 50%;

  path {
    fill: var(--color-gray500);
  }
`;

export default Calendar;
