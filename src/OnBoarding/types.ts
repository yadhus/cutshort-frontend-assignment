export enum ONBOARDING_STAGE {
  WELCOME = 'welcome',
  WORKSPACE = 'workspace',
  PLANNING = 'planning',
  COMPLETED = 'completed',
}

export enum ONBOARDING_MOVE_STAGE {
  NEXT = 'next',
  PREVIOUS = 'previous',
}

export interface UserInfo {
  fullName: string;
  displayName: string;
}
