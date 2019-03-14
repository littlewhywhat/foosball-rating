FROM nginx

RUN apt-get update >/dev/null
RUN apt-get install -qq -y curl xz-utils >/dev/null
RUN curl -s http://node.salsita.co/ | bash
RUN node_installer 10.15.3

RUN rm -rf /srv && useradd -md /srv -s /bin/bash foosball
USER foosball
WORKDIR /srv
ADD --chown=foosball:foosball . /srv/

RUN npm install