import type { FC } from 'react';

import clsx from 'clsx';
import { useRouter } from 'next/router';

import { useAmplitude } from '@my-org/analytics';
import { ArrowRight } from '@my-org/icons';
import { Clamp, LazyImageResponsive } from '@my-org/ui';

import { Card } from '../../types';

interface CardProps {
  card: Card;
  isDark: boolean;
}

const Card: FC<CardProps> = ({ card, isDark }) => {
  const { title, description, url, image, cta, hoverClassName } = card;

  const handleClick = () => {

  };

  return (
    <button
      onClick={handleClick}
      className={clsx(
        'tw-w-full tw-flex tw-rounded-1 tw-overflow-hidden tw-cursor-pointer tw-bg-neutral-light-100 dark:tw-bg-elevation-dark-03',
        hoverClassName,
      )}
      css={`
        height: 192px;
        @media (min-width: 768px) {
          height: 224px;
        }
        ${!isDark
          ? // There is no tw className for this boxshadow
            'box-shadow: 0px 0px 12px rgba(227, 228, 229, 0.5), 0px 0px 4px rgba(187, 188, 191, 0.16);'
          : ''}
      `}
      type="button"
    >
      <div className="tw-hidden sm:tw-block h-full tw-w-20 tw-min-w-20 tw-max-w-20">
        <LazyImageResponsive
          sources={{ default: image, sm: image, md: image, lg: image }}
          placeholder={title}
          alt={title}
          className="w-full tw-h-full"
          imgClassName="object-cover tw-w-full"
        />
      </div>
      <div className="tw-flex flex-1 tw-flex-col tw-items-start tw-p-2.4 tw-pb-3.2 md:tw-pt-3.2 tw-max-w-[300px] sm:tw-pl-1.6">
        <p className="tw-font-caption tw-rounded-full tw-bg-neutral-light-300 tw-text-neutral-light-700 dark:tw-text-neutral-dark-400  dark:tw-bg-neutral-dark-700 tw-leading-2.4 tw-px-1.2 tw-mb-1.2 sm:tw-mb-2 tw-inline-block">
          E-Learning
        </p>
        <p className="tw-font-subtitle2 tw-text-neutral-light-800 dark:tw-text-neutral-light-100">
          {title}
        </p>
        <Clamp
          clamp={2}
          className="tw-font-body5 tw-mt-0.8 tw-text-neutral-light-700 tw-text-left"
        >
          {description}
        </Clamp>
        <div
          className={
            'tw-font-link1 tw-flex tw-items-center   tw-text-primary-light-500 dark:tw-text-neutral-light-100 tw-mt-1.2'
          }
        >
          {cta}
          <ArrowRight
            className="tw-ml-0.8 tw-text-primary-light-500  dark:tw-text-neutral-light-100"
            size={24}
          />
        </div>
      </div>
    </button>
  );
};

export default Card;
