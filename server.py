import http.server
import socketserver

port = 8080
handler = http.server.SimpleHTTPRequestHandler

with socketserver.TCPServer(("", port), handler) as httpd:
    print("serving at 0.0.0.0:" + str(port))
    httpd.serve_forever()
