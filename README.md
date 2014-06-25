# model

**model** is a client side model library for node and the browser which
provdes:

* Type Casting
* Change Events
* Plugin System

## Install

With [component](https://github.com/component/component)

    $ component install satisfeet/model

With [npm](https://github.com/npm/npm)

    $ npm install --save satisfeet-model

## Documentation

With **model** you can basically just build your own Prototype.

    var model = require('satisfeet-model');

    var Customer = model('Customer', {
      name: String,
      email: String,
      address: {
        street: String,
        city: String
      }
    });

    Customer.statics({
      find: function() {
        // receive the model
      }
    });
    Customer.methods({
      save: function() {
        // save the model
      }
    });

    var customer = new Customer({
      name: 'Bodo'
    });

    customer.set('email', 'info@satisfeet.me');
    customer.set('address.city', 'Berlin');

    customer.toJSON();

## License

Copyright 2014 Bodo Kaiser <i@bodokaiser.io>

Permission is hereby granted, free of charge, to any person obtaining
a copy of this software and associated documentation files (the
"Software"), to deal in the Software without restriction, including
without limitation the rights to use, copy, modify, merge, publish,
distribute, sublicense, and/or sell copies of the Software, and to
permit persons to whom the Software is furnished to do so, subject to
the following conditions:

The above copyright notice and this permission notice shall be
included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE
LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION
OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION
WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
