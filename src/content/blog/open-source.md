---
title: Open Source VS Proprietary
publication_date: 2024-05-25
excerpt: 'OSS is based'
cover_url: /images/uploads/opensource.webp
---

## Introduction
In the previous blog post, we talked about online privacy and its importance. Now, let's move on to something no less important, and why it matters: **Open-Source Software** (or OSS for short).

## What is OSS?
Open-source software means that the source code for a particular software is available for everyone to **see, modify, and distribute**. There are tons of different types of open-source software, ranging from most unix-based Operating Systems to the driver for your hardware (AMD graphic card driver is a prime example), as well as thousands and thousands of applications like [GIMP][1], [Firefox][2], or [VSCode][3].

On the other hand, we have **Closed-source** or **Proprietary** Software. This type of software has source code that only the person, team, or organization who created and maintain it can modify. Some examples would be [Windows][4] Operating System, [Adobe Photoshop][5], or [Nvidia Graphic Card Driver][6].

## Why OSS?
To me, closed-source software is no different than hiding your stupidity.

Humans are prone to err, that's why there are bugs and security vulnerabilities within a piece of software. This can be alleviated by allowing others to view your source code since more people looking through the code means more chance of someone finding a bug that you can't, and more contributors mean more people to solve a problem.

*"But Seth, wouldn't open source make it easier for users to get hacked?"*

I don't think so, no. Most hackers wouldn't need the source code for a piece of software to start their hacking attempts anyway. And the source code being available for everyone to see means that if some bad actor were to try to sneak in some form of [backdoor][7], they would be caught red-handed within hours, or even minutes.
This actually happened quite recently, you can click [here][8] if you want to read more about it. The short version of it is that someone (could be a group sharing the same account) add a backdoor in a release of the Linux **utility xz** within the **liblzma** library that allows remote code execution. This malicious attempt was caught and patched within a single day.

Therein lies the problem with proprietary software, no one knows if there are any vulnerabilities within the software, or if there are any hidden telemetry or backdoors within it. This is the exact reason why Windows, MacOS and iOS might not be as secure as you thought.

## What to do?
I highly encourage adopting OSS for anything that you can, from the operating system to the program you frequently use, and you can either contribute manpower or donate to some open-source projects that you like, spreading the word also helps a lot.

And please NVIDIA, open-source your damn GPU Driver code already.

![linus-nvidia](/images/uploads/linusnvidia.webp)



[1]: https://www.gimp.org/
[2]: https://www.mozilla.org/en-US/firefox/new/
[3]: https://github.com/microsoft/vscode
[4]: https://www.microsoft.com/en-us/windows
[5]: https://www.adobe.com/products/photoshop.html
[6]: https://www.nvidia.com/en-us/drivers/
[7]: https://en.wikipedia.org/wiki/Backdoor_(computing)
[8]: https://en.wikipedia.org/wiki/XZ_Utils_backdoor