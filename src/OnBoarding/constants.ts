import { PLAN } from './types';

import { ReactComponent as IconTeamPlan } from '../assets/icons/TeamPlan.svg';
import { ReactComponent as IconUserPlan } from '../assets/icons/UserPlan.svg';

export const ONBOARDING_STAGES = [{}];

export const PLANS = [
  {
    id: PLAN.USER,
    name: 'For myself',
    content: 'Write better. Think more clearly. Stay organized.',
    icon: IconUserPlan,
  },
  {
    id: PLAN.TEAM,
    name: 'With my team',
    content: 'Wikis, docs, tasks & projects, all in one place.',
    icon: IconTeamPlan,
  },
];
