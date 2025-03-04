{
			"Sid": "PolicyForCloudFrontPrivateContent",
			"Effect": "Allow",
			"Principal": {
				"Service": "cloudfront.amazonaws.com"
			},
			"Action": "s3:GetObject*",
			"Resource": "arn:aws:s3:::site-deploy-development/*",
			"Condition": {
				"StringEquals": {
					"AWS:SourceArn": "arn:aws:cloudfront::897729101032:distribution/E1XS71M6VQGLMO"
				}
			}
		}