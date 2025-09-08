---
title: 'Muffin: A Framework Toward Multi-Dimension AI Fairness by Uniting Off-the-Shelf Models'

# Authors
# If you created a profile for a user (e.g. the default `admin` user), write the username (folder name) here
# and it will be replaced with their full name and linked to their profile.
authors:
  - Sheng,Yi
  - Junhuan Yang
  - Lei Yang
  - Yiyu Shi
  - Jingtong Hu
  - Yanzhi Wang

# # Author notes (optional)
# author_notes:
#   - 'Equal contribution'
#   - 'Equal contribution'

date: '2023-07-09T00:00:00Z'
# doi: '10.1109/DAC56929.2023.10247765'

# # Schedule page publish date (NOT publication's date).
# publishDate: '2017-01-01T00:00:00Z'

# Publication type.
# Accepts a single type but formatted as a YAML list (for Hugo requirements).
# Enter a publication type from the CSL standard.
publication_types: ['paper-conference']  # ['article] for preprint, ["article-journal"] for journel

# Publication name and optional abbreviated publication name.
publication: In *2023 60th ACM/IEEE Design Automation Conference*
publication_short: In *DAC 23*

abstract: Model fairness (a.k.a., bias) has become one of the most critical problems in a wide range of AI applications. An unfair model in autonomous driving may cause a traffic accident if corner cases (e.g., extreme weather) cannot be fairly regarded; or it will incur healthcare disparities if the AI model misdiagnoses a certain group of people (e.g., brown and black skin). In recent years, there are emerging research works on addressing unfairness, and they mainly focus on a single unfair attribute, like skin tone; however, real-world data commonly have multiple attributes, among which unfairness can exist in more than one attribute, called "multi-dimensional fairness". In this paper, we first reveal a strong correlation between the different unfair attributes, i.e., optimizing fairness on one attribute will lead to the collapse of others. Then, we propose a novel Multi-Dimension Fairness framework, namely Muffin, which includes an automatic tool to unite off-the-shelf models to improve the fairness on multiple attributes simultaneously. Case studies on dermatology datasets with two unfair attributes show that the existing approach can achieve 21.05% fairness improvement on the first attribute while it makes the second attribute unfair by 1.85%. On the other hand, the proposed Muffin can unite multiple models to achieve simultaneously 26.32% and 20.37% fairness improvement on both attributes; meanwhile, it obtains 5.58% accuracy gain.

# # Summary. An optional shortened abstract.
# summary: Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis posuere tellus ac convallis placerat. Proin tincidunt magna sed ex sollicitudin condimentum.

tags: []

# Display this page in the Featured widget?
featured: true

# Custom links (uncomment lines below)
# links:
# - name: Custom Link
#   url: http://example.org

url_pdf: 'https://ieeexplore.ieee.org/document/10247765'
# url_code: ''
# url_dataset: ''
# url_poster: ''
# url_project: ''
# url_slides: ''
# url_source: 'https://github.com/HugoBlox/hugo-blox-builder'
# url_video: 'https://youtube.com'

# # Featured image
# # To use, add an image named `featured.jpg/png` to your page's folder.
# image:
#   caption: 'Image credit: [**Unsplash**](https://unsplash.com/photos/pLCdAaMFLTE)'
#   focal_point: ''
#   preview_only: false

# Associated Projects (optional).
#   Associate this publication with one or more of your projects.
#   Simply enter your project's folder or file name without extension.
#   E.g. `internal-project` references `content/project/internal-project/index.md`.
#   Otherwise, set `projects: []`.
projects:
  - example

# Slides (optional).
#   Associate this publication with Markdown slides.
#   Simply enter your slide deck's filename without extension.
#   E.g. `slides: "example"` references `content/slides/example/index.md`.
#   Otherwise, set `slides: ""`.
slides: example
---

<!-- {{% callout note %}}
Click the _Cite_ button above to demo the feature to enable visitors to import publication metadata into their reference management software.
{{% /callout %}}

{{% callout note %}}
Create your slides in Markdown - click the _Slides_ button to check out the example.
{{% /callout %}}

Add the publication's **full text** or **supplementary notes** here. You can use rich formatting such as including [code, math, and images](https://docs.hugoblox.com/content/writing-markdown-latex/). -->
