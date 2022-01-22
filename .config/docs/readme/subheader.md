<div align="center">
  <h4 align="center">
    <a href="{{ website.homepage }}" title="Megabyte Labs homepage" target="_blank">
      <img src="https://gitlab.com/megabyte-labs/assets/-/raw/master/svg/home-solid.svg" />
    </a>
    <a href="{{ repository.group.npm }}/{{ slug }}/-/blob/master/CONTRIBUTING.md" title="Learn about contributing" target="_blank">
      <img src="https://gitlab.com/megabyte-labs/assets/-/raw/master/svg/contributing-solid.svg" />
    </a>
    <a href="{{ chat_url }}" title="Slack chat room" target="_blank">
      <img src="https://gitlab.com/megabyte-labs/assets/-/raw/master/svg/chat-solid.svg" />
    </a>
    <a href="{{ profile.github }}/npm-{{ slug }}" title="GitHub mirror" target="_blank">
      <img src="https://gitlab.com/megabyte-labs/assets/-/raw/master/svg/github-solid.svg" />
    </a>
    <a href="{{ repository.group.npm }}/{{ slug }}" title="GitLab repository" target="_blank">
      <img src="https://gitlab.com/megabyte-labs/assets/-/raw/master/svg/gitlab-solid.svg" />
    </a>
  </h4>
  <p align="center">
    <a href="{{ website.npm_package }}/{{ pkg.name }}" target="_blank">
      <img alt="Version: {{ pkg.version }}" src="https://img.shields.io/badge/version-{{ pkg.version }}-blue.svg?cacheSeconds=2592000&style={{ badge_style }}" />
    </a>
    <a href="{{ repository.group.npm }}/{{ slug }}/commits/master" title="GitLab CI build status" target="_blank">
      <img alt="Build status" src="{{ repository.group.npm }}/{{ slug }}/badges/master/pipeline.svg">
    </a>
    <a href="{{ website.npm_package }}/{{ pkg.name }}" title="Dependency status reported by Depfu">
      <img alt="Dependency status reported by Depfu" src="https://img.shields.io/depfu/megabyte-labs/npm-{{ slug }}?style={{ badge_style }}&logo=npm" />
    </a>
    <a href="{{ website.npm_package }}/{{ pkg.name }}" title="Zip file size">
      <img alt="Zip file size" src="https://img.shields.io/bundlephobia/minzip/{{ pkg.name }}?style={{ bad_style }}&logo=npm" />
    </a>
    <a href="" title="Total downloads of {{ pkg.name }} on npmjs.org">
      <img alt="Total downloads of {{ pkg.name }} on npmjs.org" src="https://img.shields.io/npm/dt/{{ pkg.name }}?logo=npm&style={{ badge_style }}&logo=npm" />
    </a>
    <a href="{{ website.npm_package }}/{{ pkg.name }}" title="Number of vulnerabilities from Snyk scan on {{ pkg.name }}">
      <img alt="Number of vulnerabilities from Snyk scan on {{ pkg.name }}" src="https://img.shields.io/snyk/vulnerabilities/npm/{{ pkg.name }}?style={{ badge_style }}&logo=npm" />
    </a>
    <a href="{{ website.documentation }}/npm" target="_blank">
      <img alt="Documentation" src="https://img.shields.io/badge/documentation-yes-brightgreen.svg?logo=readthedocs&style={{ badge_style }}" />
    </a>
    <a href="{{ repository.group.npm }}/{{ slug }}/-/raw/master/LICENSE" target="_blank">
      <img alt="License: {{ license }}" src="https://img.shields.io/badge/license-{{ license }}-yellow.svg?style={{ badge_style }}" />
    </a>
  </p>
</div>
