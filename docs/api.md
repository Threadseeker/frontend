# Threadseeker Frontend API Documentation

This document describes the API endpoints required to integrate with the Threadseeker frontend. This is helpful when you are building your own backend service that 100% compatible with this frontend.

To view the OpenAPI doc for the real backend service of Threadseeker, check out [here](doc.threadseeker.app)

## Concepts

[Threadseeker](https://threadseeker.app) is implemented with task-based approach for Threads fetching work. When user clicks "Search" button, the following steps are taken:

1. Check if the user account is exist in Threads.
2. If so, create a task with id `task_id`, and return to frontend, and navigate to the waiting page.
3. The frontend will keep checking the task status of the task in the waiting page.
4. When the task is done, the frontend will navigate to the result page.

You could implement caching mechanism or save the fetched data in your database for better performance. Also, queueing mechanism is recommended to prevent your service from being overwhelmed by requests and blocked by rate limit.

## Set Your Base URL & API Version

The frontend proxies the API requests to your backend service:

`/service/api/v1/**` -> `{API_HOST}/api/v1/**`

It is required to set your base URL and API version in the `.env` file or in your environment variables. The frontend will apply the configuration automatically in `/plugins/api.ts`.

### How to disable proxy for API requests

If you don't want to proxy the requests to the backend service, remove the rules from `nuxt.config.ts`:

```
nitro:{
    routeRules:{
        // Remove the following line
        "/service/api/**":{
            proxy:"http://localhost:3000/api/**"
        }
    }
}
```

Then, Update the `baseURL` in `/plugins/api.ts`:

```
const fetchOptions: NitroFetchOptions<"json"> = {
　　baseURL: `` // Change to your backend service URL
};
```

## Endpoints

### Search User by Username `auth required`

```
GET /api/{API_VERSION}/threads/user/:username
```
#### Response:
| Field | Type | Description |
|-------|------|-------------|
| status | `"ok"` \| `"failed"` | Status of the request |
| is_finished | `boolean` | Whether the crawling task is finished |
| is_processing | `boolean` | Whether the crawling task is in progress |
| created_by_user | `boolean` | Whether the account was created by user |
| report_id | `string` \| `undefined` | ID of the generated report (if available) |
| task_id | `string` | ID of the crawling task |
| is_private | `boolean` \| `undefined` | Whether the account is private |
| message | `string` \| `undefined` | Error message (if status is "failed") |


### Check Crawling Task Status `auth required`
```
GET /api/{API_VERSION}/threads/task/status/:taskId
```

#### Response:
| Field | Type | Description |
|-------|------|-------------|
| status | `"ok"` \| `"failed"` | Status of the request |
| is_finished | `boolean` | Whether the task is finished |
| has_error | `boolean` | Whether the task encountered an error |
| url | `string` | URL of the resource |
| message | `string` | Status or error message |


### Get Report
```
GET /api/{API_VERSION}/threads/report/:reportId
```
#### Response:
| Field | Type | Description |
|-------|------|-------------|
| report | `object` | Report data object |
| report.post_density | `number` | Density of posts |
| report.active_level | `string` | User activity level |
| report.be_liked_count | `number` | Number of likes received |
| report.be_replied_count | `number` | Number of replies received |
| report.crawled_num | `number` | Number of items crawled |
| report.updated_at | `string` | Last update timestamp |
| report.reply_density | `number` | Density of replies |
| report.user | `object` | User information |
| report.user.follower_count | `number` | Number of followers |
| report.user.username | `string` | Username |
| report.user.full_name | `string` | Full name |
| report.user.profile_pic_url | `string` | Profile picture URL |
| report.posts | `Array<object>` | Array of post objects |
| report.posts[].id | `string` | Post ID |
| report.posts[].caption | `string` | Post caption |
| report.posts[].permalink | `string` | Post permalink URL on Threads.net |
| report.posts[].reply_count | `number` | Number of replies |
| report.posts[].like_count | `number` | Number of likes |




