import http from 'k6/http';
import { check, sleep, group } from 'k6';
import { htmlReport } from "https://raw.githubusercontent.com/benc-uk/k6-reporter/main/dist/bundle.js";


export const options = {
    stages: [
        { duration: '10m', target: 20 },
    ],
    thresholds: {
        http_req_duration: ['p(95) < 500'],
    },
};

export function handleSummary(data) {
    return {
      "summary.html": htmlReport(data),
    };
  }

export default function () {
    group('Navegar en PetsStore', () => {
        ;
        let res = http.get('https://petstore.octoperf.com/actions/Catalog.action');
        check(res, {
            'status was 200': (r) => r.status == 200,
        });

        sleep(1);

        res = http.get('https://petstore.octoperf.com/actions/Catalog.action?viewCategory=&categoryId=FISH');
        check(res, {
            'status was 200': (r) => r.status == 200,
        });
        sleep(1);
        res = http.get('https://petstore.octoperf.com/actions/Catalog.action?viewProduct=&productId=FI-SW-01');
        check(res, {
            'status was 200': (r) => r.status == 200,
        });
        sleep(1);
    });
}
