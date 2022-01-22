## Installation

To accomodate everyone, this CLI can be installed using a variety of methods.

### PyPi

If you already have Python 3 and pip3 installed, you can install the CLI by running:

```shell
pip3 install {{(if customPyPiPackageName customPyPiPackageName (append repository.prefix.github slug))}}
```

### Install Doctor

On **macOS or Linux**, you can run:

```shell
bash -sS https://install.doctor/py/{{(if customPyPiPackageName customPyPiPackageName (append repository.prefix.github slug))}}
```

And on **Windows**, you can run:

```powershell
Set-ExecutionPolicy Bypass -Scope Process -Force; [System.Net.ServicePointManager]::SecurityProtocol = [System.Net.ServicePointManager]::SecurityProtocol -bor 3072; iex ((New-Object System.Net.WebClient).DownloadString('https://install.doctor/py/{{(if customPyPiPackageName customPyPiPackageName (append repository.prefix.github slug))}}?os=win'))
```

### Homebrew

If you have [Homebrew](https://brew.sh/) installed, you can install the package by running:

```shell
brew install installdoc/py/{{(if customPyPiPackageName customPyPiPackageName (append repository.prefix.github slug))}}
```

Or if you prefer to keep Python off your system, and install a binary, you can run:

```shell
brew install installdoc/py/{{(if customPyPiPackageName customPyPiPackageName (append repository.prefix.github slug))}}-binary
```

### Chocolatey

If you are on Windows, you can install a binary version (without the Python dependency), using [Chocolatey](https://chocolatey.org/):

```powershell
choco install {{(if customPyPiPackageName customPyPiPackageName (append repository.prefix.github slug))}}
```

### Binary Releases

There are also binaries (in various formats) available for download on both [GitHub]({{repository.github}}/releases) and [GitLab]({{repository.gitlab}}/-/releases).
