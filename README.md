# html5Storage

![675 KB json data Benchmark](https://github.com/FBlade/html5Storage/issues/1)

## Usage

### Create or update Key-Value pair:

Local Storage

    $.localStorage.setItem('key_name', 'Key Value');

Session Storage

    $.sessionStorage.setItem('key_name', 'Key Value');

### Get value by key:

Local Storage

    $.localStorage.getItem('key_name');

Session Storage

    $.sessionStorage.getItem('key_name');

### Remove Key-Value pair:

Local Storage

    $.localStorage.removeItem('key_name');

Session Storage

    $.sessionStorage.removeItem('key_name');

### Remove all Key-Value pairs:

Local Storage

    $.localStorage.clear();

Session Storage

    $.sessionStorage.clear();
