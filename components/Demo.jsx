var Demo = React.createClass({
	render: function () {
		return (

			<div className="container">
				<h1>React.js Radio Group Demo</h1>
				
				<form>
					<p className="h3">How did you hear about us?</p>

					<RadioOption value="angular">
						Angular.js
					</RadioOption>

					<RadioOption value="react">
						React.js
					</RadioOption>

					<RadioOption value="ember">
						Ember.js
					</RadioOption>

					<RadioOption value="aurelia">
						Aurelia.js
					</RadioOption>

					<RadioOption value="meteor">
						Meteor.js
					</RadioOption>

					<RadioOtherOption/>

					<p><input type="submit"/></p>
				</form>
			</div>

		);
	}
});