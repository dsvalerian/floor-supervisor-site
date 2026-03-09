import {EmptyIcon, SunIcon} from "@sanity/icons";
import {Box, Button, Card, Flex, Stack, Text} from "@sanity/ui";
import {type ComponentType, useCallback, useState} from "react";

const triggerDeploy = async (hookUrl: string) => {
  const response = await fetch(hookUrl, {method: "POST"});
  if (!response.ok) {
    throw new Error(`Deploy hook failed: ${response.status}`);
  }
};

const DeployTool: ComponentType = () => {
  const [status, setStatus] = useState<string>("");
  const [isDeploying, setIsDeploying] = useState(false);

  const handleDeploy = useCallback(async (label: string, hookUrl?: string) => {
    if (!hookUrl) {
      setStatus("Failed: Missing deploy hook environment variable.");
      return;
    }

    setIsDeploying(true);
    setStatus(`Deploying ${label} site, please check it in a few minutes.`);

    try {
      await triggerDeploy(hookUrl);
      setStatus(`${label} site deploy triggered.`);
    } catch (error) {
      console.error(error);
      setStatus(`Failed to deploy ${label} site.`);
    } finally {
      setIsDeploying(false);
    }
  }, []);

  return (
    <Box padding={4}>
      <Stack space={4}>
        <Card padding={4} radius={3} shadow={1}>
          <Stack space={3}>
            <Text size={2} weight="semibold">
              Deploy site
            </Text>
            <Text size={1} muted>
              Trigger Cloudflare Pages deployments for preview or live builds.
            </Text>
            <Flex gap={3} wrap="wrap">
              <Button
                mode="ghost"
                icon={EmptyIcon}
                text="Deploy Preview"
                disabled={isDeploying}
                onClick={() => handleDeploy("preview", process.env.SANITY_STUDIO_PREVIEW_DEPLOY_HOOK)}
              />
              <Button
                tone="primary"
                icon={SunIcon}
                text="Deploy Live"
                disabled={isDeploying}
                onClick={() => handleDeploy("live", process.env.SANITY_STUDIO_LIVE_DEPLOY_HOOK)}
              />
            </Flex>
            {status && <Text size={1}>{status}</Text>}
          </Stack>
        </Card>
      </Stack>
    </Box>
  );
};

export const deployTool = {
  name: "deploy",
  title: "Deploy Site",
  component: DeployTool,
};
