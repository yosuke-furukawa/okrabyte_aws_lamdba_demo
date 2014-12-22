AWS Lambda for OCR
------------------

```shell
$ git clone https://github.com/yosuke-furukawa/okrabyte_aws_lamdba_demo
$ cd okrabyte_aws_lambda_demo
$ npm install
$ npm run build
```

# upload code.zip to AWS Lambda

# Add execute role

```json
{
  "Version": "2012-10-17",
  "Statement": [
    {
      "Effect": "Allow",
      "Action": [
        "logs:*"
      ],
      "Resource": "arn:aws:logs:*:*:*"
    },
    {
      "Effect": "Allow",
      "Action": [
        "s3:GetObject",
        "s3:PutObject"
      ],
      "Resource": [
        "arn:aws:s3:::*"
      ]
    }
  ]
}
```

# invoke role

```json
{
  "Version": "2012-10-17",
  "Statement": [
    {
      "Effect": "Allow",
      "Resource": [
        "*"
      ],
      "Action": [
        "lambda:InvokeFunction"
      ]
    }
  ]
}
```
