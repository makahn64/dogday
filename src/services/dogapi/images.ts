import * as request from 'superagent';
import {BASE_URL} from './dog-api-common';

export interface ImageResponse {
  status: string; // unclear if this is a union of success | failure, etc. see above
  message: string;
}

export const randomImageForBreed = async (breed: string) => {
  const response = await request.get(
    `${BASE_URL}/breed/${breed}/images/random`,
  );
  const r = response.body as ImageResponse;
  // the docs don't say if the status can be anything else, or what it may be. For the exercise I will assume
  // if it isn't "success", I should toss an error
  if (r.status !== 'success') {
    throw new Error('Non-success status returned');
  }
  return r.message;
};
