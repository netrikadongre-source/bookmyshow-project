import http from 'k6/http';
import { check, sleep } from 'k6';

export let options = {
  vus: 50,         // number of virtual users
  duration: '1m',  // test duration
};

export default function () {
  const res = http.get('https://bookmyshow-service-9385476434.us-central1.run.app/api/movies');
  check(res, {
    'status is 200': (r) => r.status === 200,
  });
  sleep(1);
}
