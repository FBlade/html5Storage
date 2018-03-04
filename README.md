# html5Storage
A light jQuery Plugin to use Local Storage or Session Storage (Cookies for backward compatibility.)

https://github.com/FBlade/html5Storage/issues/1

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


# Configuration

### Local Storage

    $.localStorage.settings = {
        cookiePrefix : 'html5fallback:localStorage:', // Prefix for the Local Storage substitution cookies
        cookieOptions : {
            path : '/', // Path for the cookie
            domain : document.domain, // Domain for the cookie
            expires: 365 // Days left for cookie expiring
        }
    };


### Session Storage

    $.sessionStorage.settings = {
        cookiePrefix : 'html5fallback:sessionStorage:', / Prefix for the Session Storage substitution cookies
        cookieOptions : {
            path : '/', // Path for the cookie
            domain : document.domain, // Domain for the cookie
            expires: undefined // Days left for cookie expiring (by default expires with the session)
        }
    };
