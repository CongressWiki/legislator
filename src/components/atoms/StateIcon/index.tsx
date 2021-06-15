import React from 'react';
import _ from 'lodash';

export type StateIconProps = {
  state: string;
  className?: string;
};

const StateIcon = ({ state, className, ...rest }: IconProps) => {
  const ImportedIconReference =
    React.useRef<false | React.FC<React.SVGProps<SVGSVGElement>>>(false);
  const [loading, setLoading] = React.useState(false);

  state = _.upperFirst(_.camelCase(state));

  React.useEffect(() => {
    setLoading(true);
    const importIcon = async () => {
      try {
        const { default: ReactComponent } = await import(
          `@icons/states/${state}`
        );
        ImportedIconReference.current = ReactComponent;
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    };

    importIcon();
    return () => {
      ImportedIconReference.current = false;
    };
  }, []);

  if (!loading && ImportedIconReference.current) {
    const { current: ImportedIcon } = ImportedIconReference;
    if (!ImportedIcon) throw new Error('ImportedIcon is not a component.');
    return <ImportedIcon className={className} {...rest} />;
  }

  return null;
};

export default StateIcon;
