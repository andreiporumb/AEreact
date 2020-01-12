import React from 'react';
import ss1 from './Images/Screenshot from 2020-01-12 12-23-06.png'; // with import
import ss2 from './Images/Screenshot from 2020-01-12 12-23-36.png'; // with import
import ss3 from './Images/Screenshot from 2020-01-12 12-23-46.png'; // with import

class performance extends React.Component {
  render() {
    return (
<div>
	<h1>AE project Performance</h1>

	<img src={ss1} />
<h2>As you can observe in the image above, DOMContentLoaded does take some time until finished. DOMContentLoaded fires as soon as the DOM is ready. The load event waits until the whole page is loaded (including any external resources like images, although in this project the images are stored localy).</h2>
	<img src={ss2} />
<h2>Also the load event is kind of slow. You can see the both events taking the most of the loading time im the image below. How can we improve those times? Let's look at the conclusion.</h2>
	<img src={ss3} />

<h2>Conclusions</h2>
<h3>If you want DOM to get parsed as fast as possible after the user had requested the page, some things you could do is turn your JavaScript asynchronous and to optimize loading of stylesheets which if used as usual, slow down page load due to being loaded in parallel, "stealing" traffic from the main html document.</h3><small>varvy.com</small>
</div>


  )}
}export default performance
