import React, { useEffect } from 'react';

const watchDocumentEvents = (events: React.ChangeEvent[]) => {
  useEffect(() => {
    events.forEach((event) => {
      document.addEventListener(event.type, event.callback);
    });
    return () =>
      events.forEach((event) => {
        document.removeEventListener(event.type, event.callback);
      });
  }, [events]);
};

export default watchDocumentEvents;
