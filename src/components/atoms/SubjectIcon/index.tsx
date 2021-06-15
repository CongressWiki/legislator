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

const SubjectIcon = ({ subject, className, ...rest }: IconProps) => {
  if (subject === 'No Subject') {
    return null;
  }

  subject = normalize(subject);

  const ImportedIconReference =
    React.useRef<false | React.FC<React.SVGProps<SVGSVGElement>>>(false);
  const [loading, setLoading] = React.useState(false);

  React.useEffect(() => {
    setLoading(true);
    const importIcon = async () => {
      try {
        const { default: ReactComponent } = await import(
          `@icons/subjects/${subject}`
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

export default SubjectIcon;
