import { useRouter } from 'next/router';
import React, { ReactElement } from 'react';

interface Props {}

function LanguageSelector({}: Props): ReactElement {
  const router = useRouter();

  const handleSelectLanguage = (event: React.FormEvent<HTMLSelectElement>) => {
    const { value } = event.currentTarget;
    router.push(router.pathname, null, { locale: value });
  };

  return (
    <select
      onChange={handleSelectLanguage}
      value={router.locale}
      style={{ border: 0 }}
    >
      {[
        { label: 'FR', value: 'fr' },
        { label: 'EN', value: 'en' },
      ].map((lng: { label: string; value: string }) => (
        <option key={lng.value} value={lng.value}>
          {lng.label}
        </option>
      ))}
    </select>
  );
}

export default LanguageSelector;
