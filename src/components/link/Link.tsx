import * as React from 'react';
import GenericText from '../_text';
import classNames from 'classnames';
import { BaseProps, OmitNativeProps } from '@/utils/types';

type LinkTarget = '_blank' | '_self' | '_parent' | '_top';
type LinkAppearance = 'default' | 'subtle';
type LinkSize = 'regular' | 'tiny';

export interface LinkProps extends BaseProps, OmitNativeProps<HTMLLinkElement, 'onClick'> {
  /**
   * HTML ID of `Link`
   */
  id?: string;
  /**
   * Color of `Link`
   */
  appearance: LinkAppearance;
  /**
   * Size of `Link`
   */
  size: LinkSize;
  /**
   * Disables the `Link`, making it unable to be clicked
   */
  disabled: boolean;
  /**
   * The URL to navigate to when the `Link` is clicked
   */
  href?: string;
  /**
   * Specifies where to open the navigated document
   */
  target?: LinkTarget;
  /**
   * Specifies the relationship between the linked document & current document .
   */
  rel?: string;
  /**
   * Prompts the user to save the linked URL instead of navigating to it. Can be used with or without a value
   */
  download?: string;
  /**
   * Hints at the human language of the linked URL
   */
  hreflang?: string;
  /**
   * Handler to be called when `Link` is clicked
   */
  onClick?: (event: React.MouseEvent<HTMLAnchorElement>) => void;
  /**
   * Element to be rendered
   */
  children: React.ReactNode;
}

export const Link = (props: LinkProps) => {
  const { children, className, appearance, size, disabled, ...rest } = props;

  const classes = classNames(
    {
      ['Mds-Link']: true,
      ['Mds-Link--disabled']: disabled,
      [`Mds-Link--${size}`]: size,
      [`Mds-Link--${appearance}`]: appearance,
    },
    className
  );

  return (
    <GenericText
      componentType="a"
      className={classes}
      aria-disabled={disabled}
      tabIndex={disabled && -1}
      data-test="DesignSystem-Link"
      {...rest}
    >
      {children}
    </GenericText>
  );
};

Link.displayName = 'Link';

Link.defaultProps = {
  appearance: 'default',
  size: 'regular',
  disabled: false,
};

export default Link;