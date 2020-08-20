import mock from 'xhr-mock';

import { renderHook } from '@testing-library/react-hooks';
import { useUploadOnMountEffect } from './useUploadOnMountEffect';

describe('hooks:useUploadOnMountEffect', () => {
  beforeEach(() => {
    mock.setup();
  });

  afterEach(() => {
    mock.teardown();
  });

  it('should upload the provided file on mount', async () => {
    const file = new File(['test'], 'testFile.txt');

    mock.post('/', {
      body: file,
    });

    const { result, waitForNextUpdate } = renderHook(() =>
      useUploadOnMountEffect({
        file,
        uploadUrl: '/',
        itemKey: 'test',
        headers: [
          {
            header: 'Content-Length',
            value: '12',
          },
        ],
      })
    );

    expect(result.current.percentUploaded).toBe(0);
    expect(result.current.error).toBe(undefined);
  });
});
