{
  description = "Flake to develop the colonyJS using nix(OS)";

  inputs = {
    nixpkgs.url = "github:NixOS/nixpkgs/nixos-24.05";
  };

  outputs = {
    self,
    nixpkgs
  }: {
    devShell.x86_64-linux = with nixpkgs.legacyPackages.x86_64-linux;
      mkShell {
        buildInputs = [nodejs_20 pnpm_8 zsh];
        shellHook = "exec zsh";
      };
  };
}
