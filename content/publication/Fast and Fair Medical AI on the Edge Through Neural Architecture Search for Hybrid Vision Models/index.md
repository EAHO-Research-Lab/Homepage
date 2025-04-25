---
title: 'Fast and Fair Medical AI on the Edge Through Neural Architecture Search for Hybrid Vision Models '

# Authors
# If you created a profile for a user (e.g. the default `admin` user), write the username (folder name) here
# and it will be replaced with their full name and linked to their profile.
authors:
  - Changdi Yang
  - Sheng,Yi
  - Peiyan Dong
  - Zhenglun Kong
  - Yanyu Li
  - Pinrui Yu
  - Lei Yang
  - Xue Lin
  - Yanzhi Wang

# # Author notes (optional)
# author_notes:
#   - 'Equal contribution'
#   - 'Equal contribution'

date: '2023-10-28T00:00:00Z'
doi: '10.1109/ICCAD57390.2023.10323652'

# # Schedule page publish date (NOT publication's date).
# publishDate: '2017-01-01T00:00:00Z'

# Publication type.
# Accepts a single type but formatted as a YAML list (for Hugo requirements).
# Enter a publication type from the CSL standard.
publication_types: ['paper-conference']

# Publication name and optional abbreviated publication name.
publication: In *2023 IEEE/ACM International Conference on Computer-Aided Design*
publication_short: In *ICCAD 2023*

abstract: As edge devices become readily available and indispensable, there is an urgent need for effective and efficient intelligent applications to be deployed widespread. However, fairness has always been an issue, especially in edge medical applications. Although many approaches have been proposed to mitigate the unfairness problem, their edge performance is not desirable. By examining the fairness performance of different network architectures, we observed that compared to pure convolutional neuron network (CNN) architecture, hybrid models with CNN and Vision Transformer (ViT) have exhibited better performance in terms of fairness and accuracy. After further analyzing the feature maps of intermediate layers of CNNs, ViTs, and hybrid models, we found that ViT has a strong ability to extract global information, which contributes to alleviating the unfairness problem. However, ViTs consume large amounts of computational and memory resources, which hinders their application on edge devices. To address the challenges abovementioned, we propose the first hardware-oriented co-design NAS framework to explore hybrid ViT-CNN architecture for the fair dermatology classification, namely HeViFa, which can produce light-weight models for edge devices with low unfairness scores and high classification accuracy. Experimental results show that compared with FaHaNa-Small, HeViFa-Small could search for a hybrid ViT model that reaches 10.57% and 4.03% higher accuracy as well as 0.179 and 0.0403 higher PQD score on Mix and Fitzpatrick17k dataset, repectively, and speed up by 1.21× on Samsung S21 mobile phone, 1.18× on iPhone 13 Pro and 1.37× on Raspberry Pi.

# # Summary. An optional shortened abstract.
# summary: Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis posuere tellus ac convallis placerat. Proin tincidunt magna sed ex sollicitudin condimentum.

tags: []

# Display this page in the Featured widget?
featured: true

# Custom links (uncomment lines below)
# links:
# - name: Custom Link
#   url: http://example.org

url_pdf: 'https://ieeexplore.ieee.org/document/10323652'
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
