import React from 'react';
import _ from 'lodash';

export type IconProps = {
  subject: string;
  className?: string;
};

const normalize = (string: string) => {
  string = string.replace(/ /g, '-');
  string = string.replace(/,/g, '-');
  string = string.replace(/\./g, '-');
  string = string.replace(/'/g, '');
  string = string.replace(/\(/g, '');
  string = string.replace(/\)/g, '');
  string = string.replace(/--/g, '-');
  string = string.toLowerCase();
  string = _.upperFirst(_.camelCase(string));
  return string;
};

const Icon = ({ subject, className, ...rest }: IconProps) => {
  subject = normalize(subject);
  // console.log({ subject });

  const ImportedIconRef = React.useRef<
    false | React.FC<React.SVGProps<SVGSVGElement>>
  >(false);
  const [loading, setLoading] = React.useState(false);

  React.useEffect(() => {
    setLoading(true);
    const importIcon = async () => {
      try {
        const { default: ReactComponent } = await import(
          `@icons/subjects/${subject}`
        );
        ImportedIconRef.current = ReactComponent;
      } catch (err) {
        console.log(err);
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

export default Icon;
