import * as React from 'react';

// Represents a header that can be added to the request
export interface Header {
  header: string;
  value: string;
}

// Represents the props available to be passed to this hook
export interface UploadOnMountProps {
  file: File;
  uploadUrl: string;
  itemKey: string | number;
  onFileUploaded?: (itemKey: string | number, response: any) => void;
  headers?: Header[];
}

// Represents the result of the hook
export interface UploadOnMountResult {
  percentUploaded: number;
  error?: Error;
}

export const useUploadOnMountEffect = ({
  file,
  uploadUrl,
  itemKey,
  onFileUploaded,
  headers,
}: UploadOnMountProps): UploadOnMountResult => {
  const [percentUploaded, setPercentUploaded] = React.useState<number>(0);
  const [error, setError] = React.useState<Error>();

  React.useEffect(() => {
    const xhr = new XMLHttpRequest();

    // while the file is uploading provide updates to the progress
    const onProgressUpdate = e => {
      const percentUploaded = Math.round((e.loaded * 100) / e.total);
      setPercentUploaded(percentUploaded);
    };

    // when the file has finished uploading this function will be called
    const onLoad = () => {
      if (onFileUploaded) {
        onFileUploaded(itemKey, JSON.parse(xhr.responseText));
      }
      setPercentUploaded(100);
    };

    // if there is an error during the upload, lets let the user know
    const onError = e => {
      setError(e);
    };

    const formData = new FormData();

    formData.append('file', file);

    xhr.open('POST', uploadUrl, true);

    if (headers) {
      headers.forEach(h => {
        xhr.setRequestHeader(h.header, h.value);
      });
    }

    xhr.send(formData);

    xhr.upload.addEventListener('progress', onProgressUpdate);
    xhr.addEventListener('load', onLoad);
    xhr.addEventListener('error', onError);

    //   // remove event listeners when the component unmounts;
    return () => {
      xhr.upload.removeEventListener('progress', onProgressUpdate);
      xhr.removeEventListener('load', onLoad);
      xhr.removeEventListener('error', onError);

      // if the upload is currently in progress abort it
      // when the component unmounts
      if (percentUploaded > 0 && percentUploaded < 100) {
        xhr.abort();
      }
    };

    //eslint-disable-next-line
  }, []);

  return {
    percentUploaded,
    error,
  };
};
