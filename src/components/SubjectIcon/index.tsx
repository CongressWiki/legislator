import React, { useState, useEffect, useRef } from 'react';

export type SubjectIconProps = {
  name: string;
  size?: string;
  fill?: string;
  className?: string;
};

/**
 * Broken, throws webpack errors.
 */
const SubjectIcon = ({
  name,
  size = '1rem',
  fill = 'var(--color-gray700)',
  className,
}: SubjectIconProps) => {
  const ImportedSubjectIconRef = useRef(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    const importSubjectIcon = async () => {
      try {
        const { default: namedImport } = await import(
          `@static/images/subjects/${name}/${name}`
        );
        ImportedSubjectIconRef.current = namedImport;
      } catch (err) {
        throw err;
      } finally {
        setLoading(false);
      }
    };
    importSubjectIcon();
  }, [name]);

  if (!loading && ImportedSubjectIconRef.current) {
    const { current: ImportedSubjectIcon } = ImportedSubjectIconRef;
    return (
      <ImportedSubjectIcon
        width={size}
        height={size}
        fill={fill}
        className={className}
      />
    );
  }

  return null;
};

export default SubjectIcon;
