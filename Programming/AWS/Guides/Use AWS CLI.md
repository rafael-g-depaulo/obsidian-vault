If you need to update your AWS CLI, just use:

```sh
cd /tmp
curl "https://awscli.amazonaws.com/awscli-exe-linux-x86_64.zip" -o "awscliv2.zip"
unzip awscliv2.zip
sudo ./aws/install --bin-dir /usr/local/bin --install-dir /usr/local/aws-cli --update
```

Then you can login and create a profile for that IAM user in your machine

```sh
aws login --profile guilda-admin
```

## Sources
- [Sign in through the AWS Command Line Interface - AWS Sign-In](https://docs.aws.amazon.com/signin/latest/userguide/command-line-sign-in.html)
- [Installing or updating to the latest version of the AWS CLI - AWS Command Line Interface](https://docs.aws.amazon.com/cli/latest/userguide/getting-started-install.html)