<template>
	<section class="Selector box">
		<div
			v-for="(question, questionIndex) in questions"
			:key="question.name"
			class="Selector__question"
		>
			<h2 class="Selector__question__text" v-text="question.text" />
			<div
				v-for="(option, optionIndex) in question.options"
				:key="option.value"
			>
				<input
					:id="`input__${questionIndex}__${optionIndex}`"
					v-model="question.selected"
					type="radio"
					:value="option.value"
				/>
				<label
					:for="`input__${questionIndex}__${optionIndex}`"
					v-text="option.label"
				/>
			</div>
		</div>

		<div class="Selector__actions">
			<button
				class="button is-primary is-outlined"
				:disabled="isMakeSelectionDisabled"
				@click="makeSelection"
				v-text="'Find out'"
			/>
			<button
				class="button is-primary is-outlined"
				:disabled="isResetDisabled"
				@click="reset"
				v-text="'Reset'"
			/>
		</div>
	</section>
</template>

<script>
import jsonLogic from 'json-logic-js';
import questions from '../data/questions.json';
import options from '../data/options';

export default {
	name: 'Selector',
	data() {
		return {
			questions
		};
	},
	computed: {
		isMakeSelectionDisabled() {
			return (
				this.getNumberOfAnsweredQuestions() !== this.questions.length
			);
		},
		isResetDisabled() {
			return this.getNumberOfAnsweredQuestions() === 0;
		}
	},
	methods: {
		getNumberOfAnsweredQuestions() {
			let count = 0;
			this.questions.forEach(question => {
				if (question.selected) count++;
			});
			return count;
		},
		makeSelection() {
			if (this.getNumberOfAnsweredQuestions() !== this.questions.length) {
				throw new Error('all questions must have an answer selected');
			}
			// create object in which to record scores for each option
			const scores = options.map(option => ({
				...option,
				score: 0
			}));
			// add to scores based on selected answers
			this.questions.forEach(question => {
				// find the selected answer
				const answer = question.options.find(
					option => option.value === question.selected
				);

				// check which options meet the selected answer's criteria
				options.forEach(option => {
					if (jsonLogic.apply(answer.criteria, option)) {
						// increment the relevant score if criteria is met
						const match = scores.find(
							score => score.key === option.key
						);
						match.score++;
					}
				});
			});
			// find out which option won
			let winner = null;
			scores.forEach(option => {
				if (!winner) {
					winner = option;
				} else if (option.score > winner.score) {
					winner = option;
				}
			});
			// emit the result
			this.$emit('input', winner);
		},
		reset() {
			this.questions.forEach(question => {
				question.selected = null;
			});
			this.$emit('reset');
		}
	}
};
</script>

<style lang="scss" scoped>
.Selector {
	display: flex;
	flex-direction: column;
	align-items: center;

	&__question {
		margin-bottom: 1rem;
		width: 100%;

		&__text {
			font-size: 1.5rem;
			font-weight: 600;
		}
	}

	&__actions {
		width: auto;
	}
}
</style>
