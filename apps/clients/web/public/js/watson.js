window.watsonAssistantChatOptions = {
	integrationID: "f78758d2-58fa-4d4a-af20-465c6a23b1ec", // The ID of this integration.
	region: "us-east", // The region your integration is hosted in.
	serviceInstanceID: "d0626b4d-4e4b-4cce-a6ef-7a191ea47283", // The ID of your service instance.
	onLoad: function(instance) { instance.render(); }
	};

setTimeout(function(){
	const t=document.createElement('script');
	t.src="https://web-chat.global.assistant.watson.appdomain.cloud/loadWatsonAssistantChat.js";
	document.head.appendChild(t);
});