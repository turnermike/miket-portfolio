# Mike Turner Portfolio Website

## Getting Started

1. Install dependencies: `npm install`
2. Start dev server and watch: `npm run start`

Runs the app in the development mode.
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

### Notes

Use node version 20  
`nvm install 20`  
`nvm use 20`  
`node -v`

## Deploy to Staging Server

1. `npm run build:dev`
2. `git add . && git commit -m 'staging deployment' && git push origin staging`

## Deploy to Production Server

1. `npm run build:prod`
2. `git add . && git commit -m 'production deployment' && git push origin production`

# New Environment Setup

## Hosted Zone Setup for Subdomain

1. Go to Route53 dashboard:  
   https://us-east-1.console.aws.amazon.com/route53/v2/hostedzones
2. Assuming the domain has already been added, click on the domain name in question.
3. Click the Create Record button.
4. Confirm that "A" record has been selected for Record Type.
5. Enter "staging" for Record Name.
6. From Choose Endpoint, select "Alias to another record in this hosted domain".
7. From Choose Record, select your primary domain name (xyx.com) - for now we're simpmly pointing the new subdomain to the primary domain.
8. Click the Create Records button.
9. We will return to this configuration after S3/CloudFront have been setup.

## S3 Bucket Setup

1. Go to S3 dashboard:  
   https://ca-central-1.console.aws.amazon.com/s3/home?region=ca-central-1
2. Click the Create Bucket button.
3. Enter a bucket name, keep naming conventions so use something like xyz-staging.
4. Keep ACLs disabled.
5. Remove the checkmark from "Block all public access" and agree to terms.
6. Enable bucket versioning.
7. Select "Server-side encryption with Amazon S3 managed keys (SSE-S3)" for Encryption Type and leave Bucket Key disabled.
8. Click the Create Bucket button.

### Add Bucket Policy

1. Select your new bucket and click on the Permissions tab.
2. Click the Edit button for Bucket Policy and use this policy. Be sure to change "BUCKET-NAME: to your new bucket name (xyz-staging).

```
{
    "Version": "2012-10-17",
    "Statement": [
        {
            "Sid": "AllowPublicReadAccess",
            "Effect": "Allow",
            "Principal": "*",
            "Action": "s3:GetObject",
            "Resource": "arn:aws:s3:::<BUCKET-NAME>/*"
        }
    ]
}
```

3. Click the Save Changes button.
4. Go to the Properties tab and scroll all the way down to Static website hosting, click the Edit button and enable.
5. Enter a Index Document file name.
6. Click Save Changes.
7. Go to the Objects tab and upload your website files and confirm `index.html` is at the root of the bucket.
8. You may now retrieve your bucket endpoint under the Static website hosting section.
9. Visit your new endpoint and confirm that the page is available. If not, besure the uploaded directory structure is correct.

## Add SSL Certificate via AWS Certificate Manager

1. Confirm that the `us-east-1` regtion has been set.
2. Go to the ACM dashboard:  
   https://ca-central-1.console.aws.amazon.com/acm/home?region=ca-central-1#/certificates/list
3. Click the Request button and "Request a public certificate", click the Next button.
4. Add your new subdomain (staging.xyz.com) in the Fully qualified domain name field.
5. Keep Validation Method as DNS and Key algorithm as RSA 2048.
6. Click the Request button.

Note: Be sure to setup your subdomain and DNS at your domain registrar.

### Validate Your Domain

1. Open a new tab and go to Route53 dashboard:  
   https://us-east-1.console.aws.amazon.com/route53/v2/hostedzones
2. Select your domain name and click the Create Record button.
3. This time select CNAME from Record Type and your Record Name.
4. Go back to your ACM tab and copy the "CNAME name" and paste it in the Record Name field on the Route53 tab.
5. Do the same for "CNAME value".
6. Click the Create Records button and give it some time for the certificate to validate (about 10-15 minutes).

## CloudFront Setup

1. Go the the CloudFront dashboard:  
   https://us-east-1.console.aws.amazon.com/cloudfront/v4/home?region=ca-central-1#/distributions
2. Click the Create Distribution button.
3. Select your Origin Domain.
4. Click the Use Website Endpoint button.
5. Scroll down to Default Cache Behaviour and select "Redirect HTTP to HTTPS" under Viewer Protocol Policy.
6. Leave "Caching Optimized" set under Cache Key and Origin Requests.
7. Under the Web Application Firewall section, select "Do not enable security protections".
8. Under the Settings section, click Add Item for "Alternate domain name (CNAME) - optional" and add your new subdomain (staging.xyz.com). If you don't see your certificate listed, it was probably not created via `us-east-1` region.
9. Click the Create Distribution button.

## Update S3 Bucket Policy

1. Go to S3 dashboard: https://ca-central-1.console.aws.amazon.com/s3/home?region=ca-central-1
2. Select your bucket, then the Permissions tab and click Edit for your bucket policy.
3. Copy and paste this code, but be sure to replace your BUCKET_NAME, ACCOUNT_NUMBER, and DISTRIBUTION_ID.
4. Retrieve your values to enter in this code. The bucket name is avaiable under the S3 dashboard,\ account number from your user menu and the distribution ID from the CloudFront dashboard.

```
{
    "Version": "2012-10-17",
    "Statement": [
        {
            "Sid": "AllowPublicReadAccess",
            "Effect": "Allow",
            "Principal": "*",
            "Action": "s3:GetObject",
            "Resource": "arn:aws:s3:::<BUCKET_NAME>/*"
        },
        {
            "Sid": "AllowCloudFrontServicePrincipalReadOnly",
            "Effect": "Allow",
            "Principal": {
                "Service": "cloudfront.amazonaws.com"
            },
            "Action": "s3:GetObject",
            "Resource": "arn:aws:s3:::<BUCKET_NAME>/*",
            "Condition": {
                "StringEquals": {
                    "AWS:SourceArn": "arn:aws:cloudfront::<ACCOUNT_NUMBER>:distribution/<DISTRIBUTION_ID>"
                }
            }
        }
    ]
}
```

5. Replace the placeholders with your values.
6. Click the Save Changes button.
7. Test the CoudFront by browsing to your CloudFront Distribution Name under the General tab.

## Complete Subdomain Setup via Route53

1. Go to Route53 dashboard:  
   https://us-east-1.console.aws.amazon.com/route53/v2/hostedzones
2. Check the box next to your new subdomain and click the Edit Record button.
3. Select A record for Record Type, set Alias to true, and "Route traffic to" Alias to CloudFront distribution.
4. Select your new distribution from the Choose Distribution field.

## Github Actions Setup

These steps assume that you have already created a Github repository for your project.

### Add Secrets to Github Actions

1. Create a new `staging` branch that will be used to deploy to the new staging environment.
   `git checkout -b staging`
2. Add your secret keys and IDs to Github. Browse to your repository, click Secrets and variables under the Security menu and then select Actions.
3. We will need to add 4 secrets to enable our Github action,
   AWS_ACCESS_KEY_ID,
   AWS_SECRET_ACCESS_KEY,
   WEBSITE_BUCKET_NAME,
   DISTRIBUTION_ID.

4. First, let's retrieve these values. To find your Access Key and Secret Access Key, open your AWS SSH config file. For me on my Mac it's located here:
   `cat ~/.aws/credentials`
   Copy the values and save for later.
5. Your website bucket name is what you entered in the S3 Bucket Setup step (xyz-staging).
6. The distribtution ID can be retrieved from your CloudFront Dashboard.

### Setup Actions Workflow

1. Go to your github repository page and select the Actions tab.
2. Click the link in the top paragraph to "set up a workflow yourself".
3. In the text area where you see "Enter file contents here", paste this code:

```
name: My Portfolio site to AWS

on:
  push:
    branches:
      - staging
      - production

jobs:
  BuildAndDeployToStaging:
    name: Build and Deploy to Staging
    runs-on: ubuntu-latest
    if: github.ref == 'refs/heads/staging'

    steps:
      # - name: Debug environment
      #   run: |
      #     echo "Node version:"
      #     node -v
      #     echo "NPM version:"
      #     npm -v
      #     echo "Current directory:"
      #     pwd
      #     echo "List files:"
      #     ls -la

      - name: Checkout Repo
        uses: actions/checkout@v4

      - name: Set up Node
        uses: actions/setup-node@v4
        with:
          node-version: '18'

      - name: Install Dependencies
        run: npm install
        working-directory: ./

      - name: Build React App
        # run: npm run build
        run: npm run build:dev
        working-directory: ./public

      - name: Configure AWS Credentials
        uses: aws-actions/configure-aws-credentials@v4
        with:
          aws-access-key-id: ${{ secrets.AWS_ACCESS_KEY_ID }}
          aws-secret-access-key: ${{ secrets.AWS_SECRET_ACCESS_KEY }}
          aws-region: 'us-east-1'

      - name: Sync with S3 (Staging)
        run: aws s3 sync ./public s3://${{ secrets.STAGING_BUCKET_NAME }} --delete

      - name: Invalidate CloudFront Cache (Staging)
        run: aws cloudfront create-invalidation --distribution-id ${{ secrets.STAGING_DISTRIBUTION_ID }} --paths "/*"

  BuildAndDeployToProduction:
    name: Build and Deploy to Production
    runs-on: ubuntu-latest
    if: github.ref == 'refs/heads/production'

    steps:
      - name: Checkout Repo
        uses: actions/checkout@v4

      - name: Set up Node
        uses: actions/setup-node@v4
        with:
          node-version: '18'

      - name: Install Dependencies
        run: npm install
        working-directory: ./

      - name: Build React App
        run: npm run build:prod
        working-directory: ./

      - name: Configure AWS Credentials
        uses: aws-actions/configure-aws-credentials@v4
        with:
          aws-access-key-id: ${{ secrets.AWS_ACCESS_KEY_ID }}
          aws-secret-access-key: ${{ secrets.AWS_SECRET_ACCESS_KEY }}
          aws-region: 'us-east-1'

      - name: Sync with S3 (Production)
        run: aws s3 sync ./build s3://${{ secrets.PRODUCTION_BUCKET_NAME }} --delete

      - name: Invalidate CloudFront Cache (Production)
        run: aws cloudfront create-invalidation --distribution-id ${{ secrets.PRODUCTION_DISTRIBUTION_ID }} --paths "/*"
```

This will use the secrets added to your Github repository.

4. Take a look at the code to familiarize yourself. You may have to change the source parameter. In this example I want to deploy my `build` directory that is on the same level as index.html.

## Deploy local site to S3

1. Run your production build script.  
   `npm run build`
2. Push your branch to Github to trigger the action.  
   `git add . && git commit -m 'staging deployment' && git push origin staging`
