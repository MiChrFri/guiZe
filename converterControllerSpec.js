describe('some test', function() {
    var ctrl, scope;

    beforeEach(module('myModule'));

    beforeEach(inject(function($controller, $rootScope) {
        scope = $rootScope;
        ctrl = $controller('converterController', {
            $scope: scope
        });
    }));

    it('should return string with html tags that replaced the markdown', function() {
        var convertedMarkdown = scope.convertCode("```java")
        expect(convertedMarkdown).toBe('<pre><code class="java">');
    });

});