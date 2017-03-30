import Config from 'react-native-config';

export const SEARCH_TERM = 'ThoughtWorks';

const parseResponse = async (response) => {
  const json = await response.json();
  if (response.status !== 200) {
    throw new Error(json.errors[0].message);
  }
  return json;
};

const getTwitterBearerToken = async () => {
  const response = await fetch(`${Config.TWITTER_API_HOST}/oauth2/token`, {
    method: 'POST',
    headers: {
      Authorization: `Basic ${Config.TWITTER_AUTH_TOKEN}`,
      'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8',
    },
    body: 'grant_type=client_credentials',
  });
  const parsed = await parseResponse(response);
  return parsed.access_token;
};

export const getTweets = async () => {
  const bearerToken = await getTwitterBearerToken();
  const response = await fetch(`${Config.TWITTER_API_HOST}/1.1/search/tweets.json?q=%23${SEARCH_TERM}`, {
    method: 'GET',
    headers: {
      Authorization: `Bearer ${bearerToken}`,
      'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8',
    },
  });
  const parsed = await parseResponse(response);
  return parsed.statuses;
};
