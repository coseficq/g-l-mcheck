import { getEndpointPlugin } from "@aws-sdk/middleware-endpoint";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { getAwsAuthPlugin } from "@aws-sdk/middleware-signing";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { DeleteIdentitiesInputFilterSensitiveLog, DeleteIdentitiesResponseFilterSensitiveLog, } from "../models/models_0";
import { deserializeAws_json1_1DeleteIdentitiesCommand, serializeAws_json1_1DeleteIdentitiesCommand, } from "../protocols/Aws_json1_1";
export class DeleteIdentitiesCommand extends $Command {
    constructor(input) {
        super();
        this.input = input;
    }
    static getEndpointParameterInstructions() {
        return {
            UseFIPS: { type: "builtInParams", name: "useFipsEndpoint" },
            Endpoint: { type: "builtInParams", name: "endpoint" },
            Region: { type: "builtInParams", name: "region" },
            UseDualStack: { type: "builtInParams", name: "useDualstackEndpoint" },
        };
    }
    resolveMiddleware(clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        this.middlewareStack.use(getEndpointPlugin(configuration, DeleteIdentitiesCommand.getEndpointParameterInstructions()));
        this.middlewareStack.use(getAwsAuthPlugin(configuration));
        const stack = clientStack.concat(this.middlewareStack);
        const { logger } = configuration;
        const clientName = "CognitoIdentityClient";
        const commandName = "DeleteIdentitiesCommand";
        const handlerExecutionContext = {
            logger,
            clientName,
            commandName,
            inputFilterSensitiveLog: DeleteIdentitiesInputFilterSensitiveLog,
            outputFilterSensitiveLog: DeleteIdentitiesResponseFilterSensitiveLog,
        };
        const { requestHandler } = configuration;
        return stack.resolve((request) => requestHandler.handle(request.request, options || {}), handlerExecutionContext);
    }
    serialize(input, context) {
        return serializeAws_json1_1DeleteIdentitiesCommand(input, context);
    }
    deserialize(output, context) {
        return deserializeAws_json1_1DeleteIdentitiesCommand(output, context);
    }
}