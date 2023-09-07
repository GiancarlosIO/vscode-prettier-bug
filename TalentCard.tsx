import type { FC } from 'react';

import { useTranslation } from '@crehana/i18n';
import { Skeleton } from '@crehana/ui';

import type { Talent } from '../../types';
import Module from './Module';

export interface TalentCardProps {
  talent: Talent;
  isDark: boolean;
  loading: boolean & Talent & FC;
}

console.log({
  useTranslation,
  Module,
  Skeleton,
});
