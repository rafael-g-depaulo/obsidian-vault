Based on [this article](https://linuxize.com/post/how-get-size-of-file-directory-linux/).

To get the size of a directory in a human readable format, do:

```sh
du -sh /var
```
- `-s`: don't display info for subdirectories, just the main directory given
- `-h`: display in a human readable format
