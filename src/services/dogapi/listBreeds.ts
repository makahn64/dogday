import * as request from 'superagent';
import {BASE_URL} from './dog-api-common';

// form is key = major breed, string array is minor
export type BreedMap = {
  [k: string]: string[];
};

export interface ListAllBreedsResponse {
  status: string; // unclear if this is a union of success | failure, etc. see above
  message: BreedMap;
}

export interface ListAllBreedsResponse {
  status: string; // unclear if this is a union of success | failure, etc. see above
  message: BreedMap;
}

export const listAllBreeds = async () => {
  const response = await request.get(`${BASE_URL}/breeds/list/all`);
  const r = response.body as ListAllBreedsResponse;
  // the docs don't say if the status can be anything else, or what it may be. For the exercise I will assume
  // if it isn't "success", I should toss an error
  if (r.status !== 'success') {
    throw new Error('Non-success status returned');
  }
  return r.message;
};

// just the major breeds as a string[]
export const listAllMajorBreeds = async () => {
  const allBreeds = await listAllBreeds();
  return Object.keys(allBreeds).sort();
};

// the data from this API is pretty inconsistent. In some cases the major breed is listed as a sub breed. Oh well!
// this method returns the data in a form like "irish terrier" instead of hierachically
// the instructions say to ignore sub-breeds, but this is here for fun and completeness
export const listAllBreedsFlattened = async () => {
  const list = await listAllBreeds();
  const families = Object.keys(list);
  // could have used some fancy reduce here, but for clarity...
  const rval: string[] = [];
  for (const family of families) {
    rval.push(family);
    // are there sub-breeds?
    for (const sub of list[family]) {
      // push sub breed in the form "yorkshire terrier"
      rval.push(`${sub} ${family}`);
    }
  }
  return rval;
};


