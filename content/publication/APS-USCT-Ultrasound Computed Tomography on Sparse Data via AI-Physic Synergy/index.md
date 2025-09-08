---
title: 'APS-USCT: Ultrasound Computed Tomography on Sparse Data via AI-Physic Synergy'

# Authors
# If you created a profile for a user (e.g. the default `admin` user), write the username (folder name) here
# and it will be replaced with their full name and linked to their profile.
authors:
  - Sheng,Yi
  - Hanchen Wang
  - Yipei Liu
  - Junhuan Yang
  - Weiwen Jiang
  - Youzuo Lin
  - Lei Yang

# # Author notes (optional)
# author_notes:
#   - 'Equal contribution'
#   - 'Equal contribution'

date: '2024-12-03T00:00:00Z'
# doi: ''

# # Schedule page publish date (NOT publication's date).
# publishDate: '2017-01-01T00:00:00Z'

# Publication type.
# Accepts a single type but formatted as a YAML list (for Hugo requirements).
# Enter a publication type from the CSL standard.
publication_types: ['paper-conference']

# Publication name and optional abbreviated publication name.
publication: In *Medical Image Computing and Computer Assisted Intervention – MICCAI 2024*
publication_short: In *MICCAI 2024*

abstract: "Ultrasound computed tomography (USCT) is a promising technique that achieves superior medical imaging reconstruction resolution by fully leveraging waveform information, outperforming conventional ultrasound methods. Despite its advantages, high-quality USCT reconstruction relies on extensive data acquisition by a large number of transducers, leading to increased costs, computational demands, extended patient scanning times, and manufacturing complexities. To mitigate these issues, we propose a new USCT method called APS-USCT, which facilitates imaging with sparse data, substantially reducing dependence on high-cost dense data acquisition. Our APS-USCT method consists of two primary components: APS-wave and APS-FWI. The APS-wave component, an encoder-decoder system, preprocesses the waveform data, converting sparse data into dense waveforms to augment sample density prior to reconstruction. The APS-FWI component, utilizing the InversionNet, directly reconstructs the speed of sound (SOS) from the ultrasound waveform data. We further improve the model’s performance by incorporating Squeeze-and-Excitation (SE) Blocks and source encoding techniques. Testing our method on a breast cancer dataset yielded promising results. It demonstrated outstanding performance with an average Structural Similarity Index (SSIM) of 0.8431. Notably, over 82% of samples achieved an SSIM above 0.8, with nearly 61% exceeding 0.85, highlighting the significant potential of our approach in improving USCT image reconstruction by efficiently utilizing sparse data."

# # Summary. An optional shortened abstract.
# summary: Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis posuere tellus ac convallis placerat. Proin tincidunt magna sed ex sollicitudin condimentum.

tags: []

# Display this page in the Featured widget?
featured: true

# Custom links (uncomment lines below)
# links:
# - name: Custom Link
#   url: http://example.org

url_pdf: 'https://arxiv.org/pdf/2407.14564'
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
