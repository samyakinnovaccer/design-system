import * as React from 'react';
import { render, screen } from '@testing-library/react';
import { Button } from '@/index';
import { ButtonProps as Props } from '@/index.type';
import { testHelper, filterUndefined, valueHelper, testMessageHelper } from '@/utils/testHelper';
import { MakeRequired } from '@/utils/types';

const BooleanValue = [true, false];
const buttonType = ['button', 'submit', 'reset'];
const icon = 'events';
const iconAlign = ['left', 'right'];
const sizes: Props['size'][] = ['tiny', 'regular', 'large'];
const appearance = ['basic', 'primary', 'alert', 'transparent'];
const sizeMapping: Record<MakeRequired<Props['size']>, number> = {
  tiny: 12,
  regular: 16,
  large: 20,
};

describe('Button component', () => {
  const mapper: Record<string, any> = {
    type: valueHelper(buttonType, { required: true, iterate: true }),
  };

  const testFunc = (props: Record<string, any>): void => {
    const attr = filterUndefined(props) as Props;

    it(testMessageHelper(attr), () => {
      const { baseElement } = render(<Button {...attr}>Button</Button>);
      expect(baseElement).toMatchSnapshot();
    });
  };

  testHelper(mapper, testFunc);
});

describe('Button component', () => {
  const mapper: Record<string, any> = {
    appearance: valueHelper(appearance, { required: true, iterate: true }),
    expanded: valueHelper(BooleanValue, { required: true, iterate: true }),
  };

  const testFunc = (props: Record<string, any>): void => {
    const attr = filterUndefined(props) as Props;

    it(testMessageHelper(attr), () => {
      const { baseElement } = render(<Button {...attr}>Button</Button>);
      expect(baseElement).toMatchSnapshot();
    });
  };

  testHelper(mapper, testFunc);
});

describe('Button component', () => {
  const mapper: Record<string, any> = {
    size: valueHelper(sizes, { required: true, iterate: true }),
  };

  const testFunc = (props: Record<string, any>): void => {
    const attr = filterUndefined(props) as Props;

    it(testMessageHelper(attr), () => {
      const { baseElement } = render(<Button {...attr}>Button</Button>);
      expect(baseElement).toMatchSnapshot();
    });
  };

  testHelper(mapper, testFunc);
});

describe('Button component', () => {
  const mapper: Record<string, any> = {
    size: valueHelper(sizes, { required: true, iterate: true }),
    icon: valueHelper(icon, { required: true }),
    iconAlign: valueHelper(iconAlign, { required: true, iterate: true }),
  };

  const testFunc = (props: Record<string, any>): void => {
    const attr = filterUndefined(props) as Props;

    it(testMessageHelper(attr), () => {
      const { baseElement } = render(<Button {...attr}>Button</Button>);
      expect(baseElement).toMatchSnapshot();
    });
  };

  testHelper(mapper, testFunc);
});

describe('Button component', () => {
  const mapper: Record<string, any> = {
    size: valueHelper(sizes, { required: true, iterate: true }),
    icon: valueHelper(icon, { required: true }),
    largeIcon: valueHelper(true, { required: true }),
  };

  const testFunc = (props: Record<string, any>): void => {
    const attr = filterUndefined(props) as Props;

    it(testMessageHelper(attr), () => {
      const { baseElement } = render(<Button {...attr}>Button</Button>);
      expect(baseElement).toMatchSnapshot();
    });
  };

  testHelper(mapper, testFunc);
});

describe('Button component', () => {
  const mapper: Record<string, any> = {
    appearance: valueHelper(appearance, { required: true, iterate: true }),
    disabled: valueHelper(true, { required: true }),
  };

  const testFunc = (props: Record<string, any>): void => {
    const attr = filterUndefined(props) as Props;

    it(testMessageHelper(attr), () => {
      const { baseElement } = render(<Button {...attr}>Button</Button>);
      expect(baseElement).toMatchSnapshot();
    });
  };

  testHelper(mapper, testFunc);
});

describe('Button component', () => {
  const mapper: Record<string, any> = {
    appearance: valueHelper(appearance, { required: true, iterate: true }),
    selected: valueHelper(true, { required: true }),
  };

  const testFunc = (props: Record<string, any>): void => {
    const attr = filterUndefined(props) as Props;

    it(testMessageHelper(attr), () => {
      const { baseElement } = render(<Button {...attr}>Button</Button>);
      expect(baseElement).toMatchSnapshot();
    });
  };

  testHelper(mapper, testFunc);
});

describe('Button component', () => {
  const mapper: Record<string, any> = {
    appearance: valueHelper(appearance, { required: true, iterate: true }),
    loading: valueHelper(true, { required: true }),
  };

  const testFunc = (props: Record<string, any>): void => {
    const attr = filterUndefined(props) as Props;

    it(testMessageHelper(attr), () => {
      const { baseElement } = render(<Button {...attr}>Button</Button>);
      expect(baseElement).toMatchSnapshot();
    });
  };

  testHelper(mapper, testFunc);
});

describe('Button component with no children', () => {
  const mapper: Record<string, any> = {
    appearance: valueHelper(appearance, { required: true, iterate: true }),
    loading: valueHelper(true, { required: true }),
  };

  const testFunc = (props: Record<string, any>): void => {
    const attr = filterUndefined(props) as Props;

    it(testMessageHelper(attr), () => {
      const { baseElement } = render(<Button {...attr} />);
      expect(baseElement).toMatchSnapshot();
    });
  };

  testHelper(mapper, testFunc);
});

describe('Button component with icon', () => {
  it('renders icon and label inside button', () => {
    const { getByTestId } = render(<Button iconOptions={{ name: 'events' }}>Button</Button>);
    expect(getByTestId('DesignSystem-Button--Icon').textContent).toMatch('events');
  });

  sizes.forEach((s = 'regular') => {
    it(`renders icon of fontSize = ${sizeMapping[s]} for button size = ${s}`, () => {
      const { getByTestId } = render(
        <Button iconOptions={{ name: 'events' }} size={s}>
          Button
        </Button>
      );
      expect(getByTestId('DesignSystem-Button--Icon')).toHaveStyle(`fontSize: ${sizeMapping[s]}px`);
    });

    it(`renders large icon inside button size = ${s}`, () => {
      const { getByTestId } = render(<Button iconOptions={{ name: 'events', isLarge: true }} size={s} />);
      expect(getByTestId('DesignSystem-Button--Icon')).toHaveStyle(`fontSize: ${sizeMapping[s] + 4}px`);
    });

    it('does not render large icon when button has label', () => {
      const { getByTestId } = render(
        <Button iconOptions={{ name: 'events', isLarge: true }} size={s}>
          Button
        </Button>
      );
      expect(getByTestId('DesignSystem-Button--Icon')).toHaveStyle(`fontSize: ${sizeMapping[s]}px`);
    });
  });

  describe('Button with spinner', () => {
    it('Should have Button-spinner and Button--regularSquare class when loading state and no children', () => {
      const { getByTestId } = render(<Button loading={true} />);
      expect(getByTestId('DesignSystem-Button')).toHaveClass('Button--regularSquare');
    });

    it('Should have Button-spinner class when loading state', () => {
      const { getByTestId } = render(<Button loading={true}>Button</Button>);
      expect(getByTestId('DesignSystem-Button--Spinner')).toHaveClass('Button-spinner');
    });

    it('Should have no Button-spinner class when no loading state', () => {
      const { getByTestId } = render(<Button loading={false}>Button</Button>);
      expect(getByTestId('DesignSystem-Button')).not.toHaveClass('Button-spinner');
    });

    it('Should have Button-text--hidden class when loading', () => {
      const { getByTestId } = render(<Button loading={true}>Button</Button>);
      expect(getByTestId('DesignSystem-Button').children[1]).toHaveClass('Button-text--hidden');
    });
  });
});

describe('Button component with Tooltip', () => {
  // TODO - To uncomment when tooltip is implemented
  // it('check for tooltip attribute', () => {
  //   const { getByTestId } = render(
  //     <Button appearance="basic" iconOptions={{ name: 'keyboard_arrow_right', tooltip: 'Next in rank' }} />
  //   );

  //   fireEvent.mouseEnter(getByTestId('DesignSystem-Button'));
  //   expect(getByTestId('DesignSystem-Popover')).toBeInTheDocument();
  // });

  it('check for tooltip when children is given', () => {
    render(
      <Button appearance="basic" iconOptions={{ name: 'keyboard_arrow_right', tooltip: 'Next in rank' }}>
        Click Me
      </Button>
    );

    const TooltipComponent = screen.queryByText('DesignSystem-Popover');
    expect(TooltipComponent).not.toBeInTheDocument();
  });

  it('check for tooltip when icon is not given', () => {
    render(<Button appearance="basic" iconOptions={{ tooltip: 'Next in rank' }} />);
    const TooltipComponent = screen.queryByText('DesignSystem-Popover');
    expect(TooltipComponent).not.toBeInTheDocument();
  });
});
