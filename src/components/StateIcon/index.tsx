import React from 'react';
import _ from 'lodash';

export type IconProps = {
  state: string;
  className?: string;
};

const StateIcon = ({ state, className, ...rest }: IconProps) => {
  const ImportedIconRef = React.useRef<
    false | React.FC<React.SVGProps<SVGSVGElement>>
  >(false);
  const [loading, setLoading] = React.useState(false);

  state = _.upperFirst(_.camelCase(state));

  React.useEffect(() => {
    setLoading(true);
    const importIcon = async () => {
      try {
        const { default: ReactComponent } = await import(
          `@icons/states/${state}`
        );
        ImportedIconRef.current = ReactComponent;
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    };
    importIcon();
    return () => {
      ImportedIconRef.current = false;
    };
  }, []);

  if (!loading && ImportedIconRef.current) {
    const { current: ImportedIcon } = ImportedIconRef;
    if (!ImportedIcon) throw new Error('ImportedIcon is not a component.');
    return <ImportedIcon className={className} {...rest} />;
  }

  return null;
};

export default StateIcon;
