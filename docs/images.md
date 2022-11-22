## Image manipulation

### Resizing

On the fly image resizing from an URL (url param must be URL-encoded). Can be reized by width, height or both.
Accepted resize values are between 5 and 3000.

Route signature: /v1/images/resize-from-url/:url?width=width&height=height

Rate limiting: none

Usage example:

- http://localhost:8080/v1/images/resize-from-url/https%3A%2F%2Fi.redd.it%2Fwsufxo9fnr191.png?width=330&height=200
