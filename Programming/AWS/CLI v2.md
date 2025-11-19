# AWS CLI V2
There's a lot of difference between v2 and v1. I went some headache to migrate, but following this article and the ones it links to it all worked out: [Installing or updating to the latest version of the AWS CLI - AWS Command Line Interface](https://docs.aws.amazon.com/cli/latest/userguide/getting-started-install.html).

## Install v2
Copied from [Installing or updating to the latest version of the AWS CLI - AWS Command Line Interface](https://docs.aws.amazon.com/cli/latest/userguide/getting-started-install.html):

We provide an official AWS supported version of the AWS CLI on `snap`. If you want to always have the latest version of the AWS CLI installed on your system, a snap package provides this for you as it auto-updates. There is no built-in support for selecting minor versions of AWS CLI and therefore it is not an optimal install method if your team needs to pin versions. If you want to install a specific minor version of the AWS CLI, we suggest you use the command line installer.

1. If your Linux platform does not already have `snap` installed, install `snap` on your platform.
    1. For information on installing `snap`, see [Installing the daemon](https://snapcraft.io/docs/installing-snapd) in the _Snap documentation_.
    2. You may need to restart your system so that your `PATH` variables are updated correctly. If you are having installation issues, follow steps in [Fix common issues](https://snapcraft.io/docs/fix-common-issues) in the _Snap documentation_.
    3. To verify that `snap` is installed correctly, run the following command.

```sh
snap version
```
  
2. Run the following `snap install` command for the AWS CLI.

```sh
snap install aws-cli --classic
```
    
Depending on your permissions, you may need to add `sudo` to the command.

```sh
sudo snap install aws-cli --classic
```

3. Verify that the AWS CLI installed correctly.

```sh
aws --version
aws-cli/2.27.41 Python/3.11.6 Linux/5.10.205-195.807.amzn2.x86_64 # expect something like this as output
``` 

If you get an error, see [Troubleshooting errors for the AWS CLI](https://docs.aws.amazon.com/cli/latest/userguide/cli-chap-troubleshooting.html).