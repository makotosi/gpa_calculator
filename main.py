#!/usr/bin/env python
#
# Copyright 2011 Makoto Siraisi Inc.
#
# 
import os
from google.appengine.ext import webapp
from google.appengine.ext.webapp import util
from google.appengine.ext.webapp import template

class MainPage(webapp.RequestHandler):
  def get(self):

    template_values = {
      'person': 'Makoto Siraisi',
      'Place': 'Tokyo',
      }

    path = os.path.join(os.path.dirname(__file__), 'index.html')
    self.response.out.write(template.render(path, template_values))


def main():
    application = webapp.WSGIApplication([('/', MainPage)],
                                         debug=True)
    util.run_wsgi_app(application)


if __name__ == '__main__':
    main()
